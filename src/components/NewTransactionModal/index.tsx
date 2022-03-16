import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { useAuthentication } from '../../hooks/useAuthentication';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  editTransactionId?: string;
}

export const NewTransactionModal = ({isOpen, onRequestClose, editTransactionId}: NewTransactionModalProps) => {

  const { user } = useAuthentication();
  const userId = user?.id;

  const { createTransaction, updateTransaction } = useTransactions();

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
  
    let transactionsData = {
      title,
      amount,
      category,
      type,
      userId
    }
    
    if(editTransactionId) {
      await updateTransaction(transactionsData, editTransactionId);
    }

    else {
      await createTransaction(transactionsData);
    }

    setType('');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button className="react-modal-close" type="button" onClick={onRequestClose}>
          <img src={closeImg} alt="Fechar modal"/>
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input 
            autoFocus 
            placeholder="Descrição"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number" 
            placeholder="Valor" 
            value={amount ? amount : ''}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type='button'
              isActive = {type === 'deposit'}
              onClick={() => setType('deposit')}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </RadioBox> 

            <RadioBox
              type='button'
              isActive = {type === 'withdraw'}
              onClick={() => setType('withdraw')} 
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <select name="selecione" id="transactionType" onChange={e => setCategory(e.target.value.trim() === '' ? 'receita' : e.target.value)}>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>

          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}

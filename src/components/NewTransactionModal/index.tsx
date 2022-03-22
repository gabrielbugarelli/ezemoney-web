import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { useAuthentication } from '../../hooks/useAuthentication';

type TransactionEditableType = {
  amount?: number;
  createdAt?: Object;
  title?: string;
  type?: string;
  userId?: string
}

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  editTransactionId?: string;
  transactionEditable?: TransactionEditableType | undefined;
}

export const NewTransactionModal = ({isOpen, onRequestClose, editTransactionId, transactionEditable}: NewTransactionModalProps) => {

  const { user } = useAuthentication();
  const userId = user?.id;

  const { createTransaction, updateTransaction } = useTransactions();

  const [type, setType] = useState('receita')
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    
    if(editTransactionId && transactionEditable) {
        
      let transactionsData = {
        title: title ? title : transactionEditable.title?.trim() != undefined ? transactionEditable.title : title,
        amount: amount ? amount : transactionEditable.amount ? transactionEditable.amount : amount,
        type:  type ? type : transactionEditable.type?.trim() != undefined ? transactionEditable.type : type,
        userId
      }

      await updateTransaction(transactionsData, editTransactionId);
    }

    else {
      let transactionsData = {
        title,
        amount,
        type,
        userId
      }

      await createTransaction(transactionsData);
    }

    setType('');
    setTitle('');
    setAmount(0);
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
            placeholder={transactionEditable ? transactionEditable.title : "Descrição"}
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number"
            placeholder={transactionEditable ? String(transactionEditable.amount) : "Valor"} 
            value={amount ? amount : ''}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type='button'
              isActive = {type === 'receita'}
              onClick={() => setType('receita')}
              activeColor="green"
            >
              <img src={incomeImg} alt="Receita"/>
              <span>Receita</span>
            </RadioBox> 

            <RadioBox
              type='button'
              isActive = {type === 'despesa'}
              onClick={() => setType('despesa')} 
              activeColor="red"
            >
              <img src={outcomeImg} alt="Despesa" />
              <span>Despesa</span>
            </RadioBox>
          </TransactionTypeContainer>

          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}

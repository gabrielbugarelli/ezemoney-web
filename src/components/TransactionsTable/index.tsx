
import { doc, getDoc, deleteDoc } from  'firebase/firestore';
import { useState } from 'react';
import { useTransactions } from "../../hooks/useTransactions";
import { database } from '../../services/firebaseConnection';
import { NewTransactionModal } from '../NewTransactionModal';

import { Container } from "./styles"

export const TransactionsTable = () => {
  const { transactions } = useTransactions();
  const [ transactionId, setTransactionId ] = useState('');
  const [transactionEditable, setTransactionEditable] = useState<{} | undefined>({});
  const [ openNewTransactionModal, setOpenNewTransactionModal ] = useState(false);

  const handleDeleteTransaction = async (transactionId: string) => {
    await deleteDoc(doc(database, 'transactions', transactionId));
  }

  const handleEditTransaction = async (transaction: any) => {

    const ref = doc(database, 'transactions', transaction.id);
    const docSnap = await getDoc(ref);

    setTransactionEditable(docSnap.data());
    console.log(transactionEditable);
    

    setOpenNewTransactionModal(true)
    setTransactionId(transaction.id);
  }

  const handleCloseTransactionModal = async () => {
    setOpenNewTransactionModal(false);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, key) => (
            <tr key={key}>
              <td>{transaction.title}</td>
              
              <td className={transaction.type}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>

              <td>{transaction.type}</td>

              <td>
                {String(Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)))}
              </td>

              <td style={{display: 'flex', gap: '1rem'}}>
                <button onClick={() => handleEditTransaction(transaction)} style={{backgroundColor: 'transparent', border: 'none'}}> 
                  <svg width={'28px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#ffd500  " d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM325.8 139.7C310.1 124.1 284.8 124.1 269.2 139.7L247.8 161.1L318.7 232.1L340.1 210.7C355.8 195 355.8 169.7 340.1 154.1L325.8 139.7zM111.5 303.8L96.48 363.1C95.11 369.4 96.71 375.2 100.7 379.2C104.7 383.1 110.4 384.7 115.9 383.4L176 368.3C181.6 366.9 186.8 364 190.9 359.9L296.1 254.7L225.1 183.8L119.9 288.1C115.8 293.1 112.9 298.2 111.5 303.8z"/>
                  </svg>
                </button>

                <button onClick={() => handleDeleteTransaction(transaction.id)} style={{backgroundColor: 'transparent', border: 'none'}}>
                  <svg width={'25px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#E52E4D" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/>
                  </svg>
                </button>
              </td>
            </tr>
          ))}

          {/* Abre modal para EDITAR a transação */}
          { openNewTransactionModal && 
            <NewTransactionModal 
              isOpen={openNewTransactionModal} 
              onRequestClose={handleCloseTransactionModal} 
              editTransactionId={transactionId}
              transactionEditable={transactionEditable}
            />
          }
        </tbody>
      </table>
    </Container>
  )
}

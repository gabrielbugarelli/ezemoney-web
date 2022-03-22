import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { collection, addDoc, onSnapshot, query, where, updateDoc, doc } from 'firebase/firestore';
import { database } from '../services/firebaseConnection';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  createdAt: number;
  userId: string | undefined;
}

/**
 * O TransactionInput define quais serão os dados capturados pelo modal
 */
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  updateTransaction: (transaction: TransactionInput, transactionId: string) => Promise<void>;
}

//Contextos
const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionsProvider = ({children}: TransactionsProviderProps ) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const queryTransactions = query(collection(database, 'transactions'), where("userId", "==", `${userId}`));

    onSnapshot(queryTransactions, (querySnapshot) => {
      let transactionsData: Transaction[] = [];

      querySnapshot.forEach(doc => {
        transactionsData.push(...transactions, {
          id: doc.id,
          title: doc.data().title,
          amount: doc.data().amount,
          type: doc.data().type,
          createdAt: doc.data().createdAt.seconds * 1000, // retorna a data atual já convetida para Date Object
          userId: doc.data().userId
        })
      });

      setTransactions(transactionsData);
    })
  }, []);

  //A responsabilidade pelo gerenciamento dos dados ficam nos HOOKs
  const createTransaction = async (transactionInput: TransactionInput) => {
    try {
      if (  transactionInput.title.trim() === '' || 
            transactionInput.userId?.trim() === '' ||
            transactionInput.amount === 0
        ) {
          alert('Descrição e Valor precisam ser preenchidos!');
          return;
      }

      else {
        await addDoc(collection(database, "transactions"), {
          ...transactionInput,
          createdAt: new Date()
        });
      }

    } catch (error) {
      console.warn(`Aconteceu um erro: ${error}`);
    }
  }

  const updateTransaction = async (transactionInput: TransactionInput, transactionId: string) => {
    try {
      const ref = doc(database, 'transactions', transactionId);
      await updateDoc(ref, {
        ...transactionInput
      })
    } catch (error) {
      console.warn(`Não foi possível atualizar a transação: ${error}`);
    }
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction, updateTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context;
}

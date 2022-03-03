import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { database } from '../services/firebaseConnection';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
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
}

//Contextos
const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionsProvider = ({children}: TransactionsProviderProps ) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {

    getDocs(collection(database, 'transactions')).then(
      query => {
        query.forEach((doc) => {
          const result = doc.data()

          let data = {
            id: doc.id,
            title: result.title,
            amount: result.amount,
            type: result.type,
            category: result.category,
            createdAt: result.createdAt,
            userId: result.userId
          }          
        })
      }
    )
  }, []);

  //A responsabilidade pelo gerenciamento dos dados ficam nos HOOKs
  const createTransaction = async (transactionInput: TransactionInput) => {
    try {
      await addDoc(collection(database, "transactions"), {
        ...transactionInput,
        createdAt: new Date()
      });

    } catch (error) {
      console.warn(`Aconteceu um erro: ${error}`);
    }
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context;
}

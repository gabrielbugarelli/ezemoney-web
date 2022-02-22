import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { TransactionsProvider } from "../../hooks/useTransactions";

Modal.setAppElement('#root');

export const Panel = () => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}

import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "../../components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
    </>
  );
}

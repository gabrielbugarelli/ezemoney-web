import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

Modal.setAppElement('#root');

export const Panel = () => {
  const [ userId, _] = useState(localStorage.getItem('userId'));
  const { signWithGoogle } = useAuthentication();
  const navigate =   useNavigate();

  useEffect(() => {
    if(!userId) {
      signWithGoogle();
      navigate('/');
    }

  }, []);

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

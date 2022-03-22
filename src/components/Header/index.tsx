import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps)  => {

  const { user } = useAuthentication();
  const navigate = useNavigate();
  const [ greeting, setGreeting ] = useState('');
  
  useEffect(() => {
    const dateTime = new Date().getHours();
    
    if(user) {
      if(dateTime <= 12) {
        setGreeting(`Bom dia, ${user?.name}!`);
      }
  
      else if (dateTime > 12 && dateTime < 18) {
        setGreeting(`Boa tarde, ${user?.name}!`);
      }
  
      else {
        setGreeting(`Boa noite, ${user?.name}!`);
      }
    } else {
      setGreeting('Organize as suas finanças de forma prática.')
    }

  }, []);

  const onLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  }

  return (
    <Container>
      <Content>
        <h1 style={{color:'white'}}>{greeting}</h1>
        
        <section>
          <button autoFocus type="button" onClick={onOpenNewTransactionModal}>
            Nova Transação
          </button>

          <button type="button" onClick={onLogout}>
            Sair
          </button>
        </section>
      </Content>
    </Container>

  )
}

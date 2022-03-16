import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps)  => {

  const { user } = useAuthentication();
  const [ greeting, setGreeting ] = useState('');

  useEffect(() => {
    if(user) {
      const dateTime = new Date().getHours();

      if(dateTime > 1 && dateTime < 12) {
        setGreeting(`Bom dia, ${user?.name}!`);
      }
  
      else if (dateTime > 12 && dateTime < 17) {
        setGreeting(`Boa tarde, ${user?.name}!`);
      }
  
      else {
        setGreeting(`Boa noite, ${user?.name}!`);
      }
    } else {
      setGreeting('Organize as suas finanças de forma prática.')
    }

  }, []);

  return (
    <Container>
      <Content>
        <h1 style={{color:'white'}}>{greeting}</h1>
        <button autoFocus type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>

  )
}

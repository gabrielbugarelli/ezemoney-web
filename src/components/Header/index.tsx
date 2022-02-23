import { useAuthentication } from '../../hooks/useAuthentication';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps)  => {

  const { user } = useAuthentication();

  return (
    <Container>
      <Content>
        <h1 style={{color:'white'}}>Seja bem vindo, {user?.name}!</h1>
        <button autoFocus type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>

  )
}

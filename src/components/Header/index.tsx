import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps)  => {

  return (
    <Container>
      <Content>
        <h1 style={{color:'white'}}>Logo Kashflow</h1>
        <button autoFocus type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>

  )
}

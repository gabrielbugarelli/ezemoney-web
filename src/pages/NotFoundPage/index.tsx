import { Container } from "./styles"
import NotFoundImage from '../../assets/notFoundPage.png';

export const NotFoundPage = () => {
  return <Container>
    <img src={NotFoundImage} alt="not found image" />
    <h1>Ops... Infelizmente não encontramos essa página.</h1>
    <h2>Por favor, tente outra! 🐺</h2>
  </Container>
}

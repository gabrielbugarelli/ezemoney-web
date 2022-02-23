import { Container, DescriptionContainer, SignInContainer } from "./style"

import financeIcon from '../../assets/finance.svg';
import googleIcon from '../../assets/google-icon.svg';

export const SignIn = () => {
  return (
    <Container>

      <DescriptionContainer>
        <div>
          <img src={financeIcon} alt="Imagem de finanças do Kashflow" />

          <p>Uma ferramenta <strong> simples </strong>  para organizar as suas <strong> finanças</strong>.</p>

          <footer>desenvolvido com ❤️🐺 por <a href="https://www.kanislupus.com.br/" target="_blank"> Kanis Lupus</a>.</footer>
        </div>
      </DescriptionContainer>

      <SignInContainer>
        <h1>Logo do Kashflow</h1>

        <div>
          <button>
            <img src={googleIcon} alt="Logo do Google" />
            Entre com o google
          </button>
        </div>
      </SignInContainer>
    </Container>
  )
}

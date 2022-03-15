import { Container, DescriptionContainer, SignInContainer } from "./styles/appStyle";

import financeIcon from './assets/finance.svg';
import googleIcon from './assets/google-icon.svg';
import { useAuthentication } from "./hooks/useAuthentication";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const { user, signWithGoogle } = useAuthentication();
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    
    if(!user) {
      await signWithGoogle();
    }

    navigate('/panel');
  }

  return (
    <Container>
      <DescriptionContainer>
        <div>
          <img src={financeIcon} alt="Imagem de finanças do Pochette" />
          <p> Organize as suas <strong> finanças </strong> de forma <strong> prática</strong>.</p>

          <footer>desenvolvido com ❤️🐺 por <a href="https://www.kanislupus.com.br/" target="_blank" rel="noreferrer"> Kanis Lupus</a>.</footer>
        </div>
      </DescriptionContainer>

      <SignInContainer>
        <div>
          <h1>Logo do Pochette</h1>

          <button onClick={handleSignInWithGoogle}>
            <img src={googleIcon} alt="Logo do Google" />
            Entre com o google
          </button>
        </div>
      </SignInContainer>
    </Container>
  )
}

import { Container, DescriptionContainer, SignInContainer } from "./styles/appStyle";

import capaPochette from './assets/capa_pochette.png';
import financeICon from './assets/finance.svg';
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
          <img src={capaPochette} alt="Imagem de finanças do Pochette" />

          <p> Organize as suas <strong> finanças </strong> de forma <strong> prática</strong>.</p>
        </div>
      </DescriptionContainer>

      <SignInContainer>
        <div>
          <img src={financeICon} alt="Logo Pochette" />

          <button onClick={handleSignInWithGoogle}>
            <img src={googleIcon} alt="Logo do Google" />
            Entre com o google
          </button>
        </div>
      </SignInContainer>
    </Container>
  )
}

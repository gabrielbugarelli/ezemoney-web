import { Container, DescriptionContainer, SignInContainer } from "./styles/appStyle";

import capaEzemoney from './assets/capa_ezemoney.png';
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
          <img src={capaEzemoney} alt="Imagem de finanças do Ezemoney" />

          <p> Organize as suas <strong> finanças </strong> de forma <strong> prática</strong>.</p>

          <footer>desenvolvido com ❤️ por <a href="https://github.com/gabrielbugarelli/" target="_blank"> @gabrielbugarelli </a> 🐺💻.</footer>
        </div>
      </DescriptionContainer>

      <SignInContainer>
        <div>
          <img src={financeICon} alt="Logo Ezemoney" />
          <h1>Faça login no Ezemoney</h1>

          <button onClick={handleSignInWithGoogle}>
            <img src={googleIcon} alt="Logo do Google" />
            Entre com o google
          </button>
        </div>
      </SignInContainer>
    </Container>
  )
}

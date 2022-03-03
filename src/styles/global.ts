import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --red-100: #e24133;
    --green-100: #33CC95;
    --green-200: #38A169;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  /*
    Remove as setas direcionais 
    de adição e subtração do input number
  */
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /*
    Estilização do global do Modal Component
    da biblioteca react-modal
  */
  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: none;
    background: transparent;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }
`

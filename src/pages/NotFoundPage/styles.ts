import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  
  height: 100vh;
  width: 100vw;
  padding: 10rem;

  color: var(--background);
  background-color: var(--green-100);

  img {
    width: 40rem;
  }

  h1 {
    text-align: center;
  }

  @media (max-width: 720px) {
    padding: 3rem;

    img {
      width: 25rem;
    }

    h1 {
      font-size: large;
    }

    h2 {
      font-size: medium;
    }
  }
`;

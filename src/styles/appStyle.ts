import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media(max-width: 870px) {
    flex-direction: column-reverse;
  }
`
export const SignInContainer = styled.section`
  flex: 7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--background);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    
    gap: 1rem;

    > img {
      width: 15rem;
    }

    > h1 {
      color: var(--green-100);
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      gap: 1rem;

      color: var(--background);
      background-color: var(--red-100);
      border: none;
      border-radius: 8px;
      padding: 0.8rem;

      font-weight: bold;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const DescriptionContainer = styled.section`
  flex: 8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--background);
  background: var(--green-100);

  div {
    max-width: 500px;
    text-align: center;

    img {
      margin: 5rem 0 0 1rem;
      width: 30rem;
    }

    > p {
      margin: 1.5rem auto;
      font-size: 2rem;
      line-height: 2.4rem;
    }

    > footer {
      text-align: center;

      a {
        color: var(--background);
      }
    }
  }
`

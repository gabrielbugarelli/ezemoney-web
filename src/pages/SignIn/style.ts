import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
export const SignInContainer = styled.section`
  flex: 7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--background);

  h1 {
    color: var(--green);
    margin: 5rem auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 300px;
    > button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

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

    > span {
      color: var(--green);
    }
  }
`

export const DescriptionContainer = styled.section`

  flex: 8;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--background);
  background: var(--green);

  div {
    max-width: 500px;
    text-align: center;

    img {
      margin: 5rem 0 0 1rem;
      width: 20rem;
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

  @media(max-width: 870px) {
    display: none;
  }
`

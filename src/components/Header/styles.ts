import styled from "styled-components";

export const Container = styled.header`
  background: var(--green-200);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    gap: 1rem;
  }

  button:first-child {
    font-size: 1rem;
    color: #fff;
    background: var(--green-100);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--red);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

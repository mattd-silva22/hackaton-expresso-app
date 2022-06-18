import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  padding: 2.2rem 2.4rem;

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e6e6e6;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    gap: 0.5rem;

    font-size: 1.2rem;

    width: 100%;

    input {
      background: transparent;
      border: none;
      font-size: 1.6rem;
      width: 100%;
      padding: 0px 1rem;

      color: var(--n-700);
    }

    svg {
      width: 1.8rem;
    }
  }
`;

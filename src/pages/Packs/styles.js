import styled from "styled-components";

export const PacksContainer = styled.main`
  padding: 4rem 4%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    color: ${(props) => props.theme["darkFuchsia"]};
    font-size: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const PacksDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  place-items: center;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

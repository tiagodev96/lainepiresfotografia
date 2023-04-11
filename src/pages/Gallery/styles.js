import styled from "styled-components";

export const GalleryContainer = styled.main`
  padding: 4rem 4%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["black"]};
    text-align: center;
  }
`;

export const PhotoEssaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  place-items: center;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

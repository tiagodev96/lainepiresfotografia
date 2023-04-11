import styled from "styled-components";

export const PhotoDisplayContainer = styled.main`
  padding: 4rem 4%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  a {
    width: 80px;

    p {
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      color: ${(props) => props.theme["black"]};

      &:hover {
        color: ${(props) => props.theme["secondary"]};
      }
    }
  }
`;

export const AlbumContainer = styled.div``;

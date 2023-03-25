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
      color: ${(props) => props.theme["darkFuchsia"]};

      &:hover {
        color: ${(props) => props.theme["fuchsia"]};
      }
    }
  }
`;

export const AlbumContainer = styled.div``;

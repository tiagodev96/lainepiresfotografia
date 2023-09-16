import styled from "styled-components";

export const GalleryContainer = styled.div`
  cursor: pointer;
  font-family: "Playfair Display", serif;
  color: ${(props) => props.theme["black"]};
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  max-width: 332px;

  &:hover {
    border: 1px solid ${(props) => props.theme["black"]};
  }

  img {
    width: 100%;
    border-radius: 8px;
    height: 500px;
    object-fit: cover;
    object-position: top center;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["secondary"]};
  }

  h3 {
    font-size: 1.25rem;
  }
`;

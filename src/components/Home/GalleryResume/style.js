import styled from "styled-components";

export const GalleryResumeContainer = styled.div`
  padding: 8rem 4%;
`;

export const CategoryTab = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  background-color: ${(props) => props.theme["black"]};
  gap: 20px;
  justify-content: center;
  color: ${(props) => props.theme["white"]};
  padding: 0.75rem;
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    transition: all 0.2s ease-in-out;
    position: relative;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 1px;
      background-color: ${(props) => props.theme["white"]};
      transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }

    &.active::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const GalleryDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  place-items: center;
  margin-top: 60px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

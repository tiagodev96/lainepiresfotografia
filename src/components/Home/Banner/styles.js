import styled, { css } from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 60px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 0.5s ease-out;

  @media (max-width: 850px) {
    gap: 30px;
  }
`;

export const PictureLP = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
  border: 12px solid #fff;
  pointer-events: none;
`;

export const BannerContent = styled.div`
  flex: 0.75;
  min-width: 350px;

  p {
    font-size: 1.25rem;
    letter-spacing: 0.25rem;
    font-weight: 100;
    margin-bottom: 15px;
    transition: all 0.5s ease-out;

    @media (max-width: 850px) {
      font-size: 0.875rem;
    }
  }

  h1 {
    transition: all 0.5s ease-out;
    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    transition: all 0.5s ease-out;
    @media (max-width: 850px) {
      font-size: 1.25rem;
    }
  }
`;

export const StyledH1 = styled.h1`
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s ease-out;
  color: ${(props) => props.theme["fuchsia"]};
  margin-bottom: 1rem;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
  @media (max-width: 850px) {
    margin-bottom: 0.875rem;
  }
`;

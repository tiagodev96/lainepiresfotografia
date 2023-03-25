import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme["black"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4%;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    gap: 40px;
    justify-content: center;
  }
`;

export const LogoFooter = styled.img`
  width: auto;
  height: 65px;
  max-width: 100%;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    border: 2px solid ${(props) => props.theme["white"]};
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: 2px solid ${(props) => props.theme["fuchsia"]};
      background-color: ${(props) => props.theme["fuchsia"]};
      transform: translateY(-4px);
    }
  }
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme["white"]};
  font-size: 0.875rem;
`;

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4%;
  background-color: ${(props) => props.theme["black"]};
`;

export const LogoHeader = styled.img`
  width: 85px;
  height: 85px;
  max-width: 100%;
`;

export const PagesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  color: ${(props) => props.theme["white"]};

  li {
    font-weight: 500;
    cursor: pointer;
    padding-bottom: 0.25rem;
    position: relative;
    font-family: "Playfair Display", serif;
    letter-spacing: 0.15rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme["fuchsia"]};
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: ${(props) => props.theme["fuchsia"]};
      transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }

    &.active::after {
      width: 100%;
      left: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

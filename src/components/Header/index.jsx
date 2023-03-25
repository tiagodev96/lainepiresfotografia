import React from "react";
import { HeaderContainer, LogoHeader, PagesList } from "./styles";
import LogoMini from "../../assets/logos/logo-min-dark-bg.png";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const logoHeaderAlt =
    "Logo de Laine Pires minimalista. A logo consiste numa câmera fúcsia somente com seus contornos e as iniciais LP de Laine Pires posicionadas no canto superior direito da câmera";

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoHeader src={LogoMini} alt={logoHeaderAlt} />
      </Link>
      <nav>
        <PagesList>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Início</Link>
          </li>
          <li className={location.pathname === "/galeria" ? "active" : ""}>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li className={location.pathname === "/contato" ? "active" : ""}>
            <Link to="/pacotes">Pacotes</Link>
          </li>
        </PagesList>
      </nav>
    </HeaderContainer>
  );
};

import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import FooterLogo from "../../assets/logos/logo-full-dark-bg.png";
import {
  Copyright,
  FooterContainer,
  LogoFooter,
  SocialMediaContainer,
} from "./styles";

const footerLogoAlt =
  "Logo completo da fotógrafa. Contorno de uma câmera na cor fúcsia. Ao lado direito da câmera está escrito Laine Pires na primeira linha, e na segunda linha está escrito FOTOGRAFIA, ambos os textos na cor branca.";

export const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Link to="/">
        <LogoFooter src={FooterLogo} alt={footerLogoAlt} />
      </Link>
      <SocialMediaContainer>
        <Link
          to="https://www.instagram.com/lainepiresfotografia/"
          target="_blank"
        >
          <AiOutlineInstagram size={28} color={theme.white} />
        </Link>
      </SocialMediaContainer>

      <Copyright>
        Copyright &copy; {currentYear} Laine Pires Fotografia.
      </Copyright>
    </FooterContainer>
  );
};

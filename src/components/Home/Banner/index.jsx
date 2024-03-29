import React, { useEffect, useState } from "react";
import { BannerContainer, BannerContent, PictureLP, StyledH1 } from "./styles";
import ProfilePictureLP from "../../../assets/homeImages/lainePicture.webp";

const Banner = ({ roles }) => {
  const [rolesIndex, setRolesIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ref = setInterval(() => {
      setRolesIndex((prevState) => (prevState + 1) % roles.length);
    }, 4000);

    return () => {
      clearInterval(ref);
    };
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, [rolesIndex]);
  return (
    <BannerContainer>
      <PictureLP src={ProfilePictureLP} alt="" />
      <BannerContent>
        <p>Conheça meu trabalho!</p>
        <h1>Olá, Eu sou Laine Pires</h1>
        <StyledH1 visible={visible} key={roles[rolesIndex]}>
          {roles[rolesIndex]}.
        </StyledH1>
        <h2>Ensaios criativos com leveza e autenticidade!</h2>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

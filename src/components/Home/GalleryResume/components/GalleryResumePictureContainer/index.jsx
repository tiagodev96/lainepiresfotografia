import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GalleryContainer } from "./style";
import { dataBase } from "../../../../../data/data";

export const GalleryResumePictureContainer = ({ imageObject }) => {
  useEffect(() => {
    console.log(dataBase);
  }, [dataBase]);
  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Link to={`/galeria/album/${imageObject.id}`} onClick={handleLinkClick}>
      <GalleryContainer>
        <img src={imageObject.src} alt={imageObject.description} />
        <p>{imageObject.category}</p>
        <h3>{imageObject.description}</h3>
      </GalleryContainer>
    </Link>
  );
};

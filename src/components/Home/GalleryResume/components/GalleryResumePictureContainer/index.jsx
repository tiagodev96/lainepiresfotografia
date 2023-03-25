import React from "react";
import { Link } from "react-router-dom";
import { GalleryContainer } from "./style";

export const GalleryResumePictureContainer = ({ imageObject }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Link to={`/galeria/${imageObject.category}`} onClick={handleLinkClick}>
      <GalleryContainer>
        <img src={imageObject.src.type} alt={imageObject.description} />
        <p>{imageObject.category}</p>
        <h3>{imageObject.description}</h3>
      </GalleryContainer>
    </Link>
  );
};

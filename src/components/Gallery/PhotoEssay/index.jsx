import React from "react";
import { Link } from "react-router-dom";
import { PhotoEssayContainer } from "./styles";

const PhotoEssay = ({ imageObject }) => {
  return (
    <Link to={`/galeria/album/${imageObject.id}`}>
      <PhotoEssayContainer>
        <img src={imageObject.src} alt={imageObject.description} />
        <p>{imageObject.category}</p>
        <h3>{imageObject.description}</h3>
      </PhotoEssayContainer>
    </Link>
  );
};

export default PhotoEssay;

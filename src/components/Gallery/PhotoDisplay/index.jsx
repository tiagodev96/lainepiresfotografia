import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dataBase } from "../../../data/data";
import { AlbumContainer, PhotoDisplayContainer } from "./styles";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export const PhotoDisplay = () => {
  const { essay } = useParams();
  const [imageObject, setImageObject] = useState({});
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    setImageObject(dataBase.filter((item) => item.id === Number(essay)));
  }, [essay]);

  useEffect(() => {
    if (imageObject.length > 0) {
      imageObject[0].images.map((image) => {
        setImagesArray((prev) => [
          ...prev,
          { original: image.original.type, thumbnail: image.thumbnail.type },
        ]);
      });
    }
  }, [imageObject]);

  return (
    <PhotoDisplayContainer>
      <Link to="/galeria">
        <p>&larr; Voltar</p>
      </Link>
      <AlbumContainer>
        {imageObject.length > 0 && imagesArray.length > 0 ? (
          <ImageGallery
            thumbnailPosition="left"
            showPlayButton={false}
            showIndex={true}
            items={imagesArray}
          />
        ) : (
          ""
        )}
      </AlbumContainer>
    </PhotoDisplayContainer>
  );
};

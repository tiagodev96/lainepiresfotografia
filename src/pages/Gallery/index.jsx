import React, { useEffect, useState } from "react";
import PhotoEssay from "../../components/Gallery/PhotoEssay";
import { CategoryTab } from "../../components/Home/GalleryResume/style";
import { GalleryContainer, PhotoEssaysContainer } from "./styles";

import { useParams } from "react-router-dom";
import { dataBase } from "../../data/data";

const categories = [
  { type: "corporate", name: "Corporativas" },
  { type: "females", name: "Ensaios Femininos" },
  { type: "events", name: "Eventos" },
];

const corporateImages = dataBase.filter(
  (essay) => essay.category === "Corporativas"
);
const femaleImages = dataBase.filter(
  (essay) => essay.category === "Ensaios Femininos"
);
const eventImages = dataBase.filter((essay) => essay.category === "Eventos");

export const Gallery = () => {
  const [category, setCategory] = useState("corporate");

  const handleCategoryChange = (categoryType) => {
    setCategory(categoryType);
  };

  const defineImagesToDisplay = () => {
    if (category === "all") {
      return allImages;
    }

    if (category === "corporate") {
      return corporateImages;
    }

    if (category === "females") {
      return femaleImages;
    }

    if (category === "events") {
      return eventImages;
    }
  };

  return (
    <GalleryContainer>
      <h2>Escolha o ensaio que deseja explorar!</h2>
      <CategoryTab>
        {categories.map((categoryItem) => (
          <li
            key={categoryItem.type}
            onClick={() => handleCategoryChange(categoryItem.type)}
            className={categoryItem.type === category ? "active" : ""}
          >
            {categoryItem.name}
          </li>
        ))}
      </CategoryTab>

      <PhotoEssaysContainer>
        {defineImagesToDisplay().map((image) => (
          <PhotoEssay key={image.id} imageObject={image} />
        ))}
      </PhotoEssaysContainer>
    </GalleryContainer>
  );
};

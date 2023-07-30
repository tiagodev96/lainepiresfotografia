import React, { useState } from "react";
import { CategoryTab, GalleryDisplay, GalleryResumeContainer } from "./style";
import { GalleryResumePictureContainer } from "./components/GalleryResumePictureContainer";

import { dataBase } from "../../../data/data";

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

export const GalleryResume = () => {
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
    <GalleryResumeContainer>
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

      <GalleryDisplay>
        {defineImagesToDisplay().map((image) => (
          <GalleryResumePictureContainer key={image.id} imageObject={image} />
        ))}
      </GalleryDisplay>
    </GalleryResumeContainer>
  );
};

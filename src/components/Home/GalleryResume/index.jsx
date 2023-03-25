import React, { useState } from "react";
import { CategoryTab, GalleryDisplay, GalleryResumeContainer } from "./style";
import { GalleryResumePictureContainer } from "./components/GalleryResumePictureContainer";

import { dataBase } from "../../../data/data";

const categories = [
  { type: "corporate", name: "Corporativas" },
  { type: "casual", name: "Casuais" },
  { type: "thematic", name: "Temáticas" },
  { type: "event", name: "Eventos" },
  { type: "pregnant", name: "Gestantes" },
];

const corporateImages = dataBase.filter(
  (essay) => essay.category === "Corporativas"
);

const casualImages = dataBase.filter((essay) => essay.category === "Casuais");

const thematicImages = dataBase.filter(
  (essay) => essay.category === "Temáticas"
);

const eventImages = dataBase.filter((essay) => essay.category === "Eventos");

const pregnantImages = dataBase.filter(
  (essay) => essay.category === "Gestantes"
);

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

    if (category === "casual") {
      return casualImages;
    }

    if (category === "thematic") {
      return thematicImages;
    }

    if (category === "event") {
      return eventImages;
    }

    if (category === "pregnant") {
      return pregnantImages;
    }
  };

  return (
    <GalleryResumeContainer>
      <CategoryTab>
        {categories.map((categoryItem) => (
          <li
            onClick={() => handleCategoryChange(categoryItem.type)}
            className={categoryItem.type === category ? "active" : ""}
          >
            {categoryItem.name}
          </li>
        ))}
      </CategoryTab>

      <GalleryDisplay>
        {defineImagesToDisplay().map((image) => (
          <GalleryResumePictureContainer imageObject={image} />
        ))}
      </GalleryDisplay>
    </GalleryResumeContainer>
  );
};

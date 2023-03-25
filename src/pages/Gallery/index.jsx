import React, { useEffect, useState } from "react";
import PhotoEssay from "../../components/Gallery/PhotoEssay";
import { CategoryTab } from "../../components/Home/GalleryResume/style";
import { GalleryContainer, PhotoEssaysContainer } from "./styles";

import { useParams } from "react-router-dom";
import { dataBase } from "../../data/data";

const categories = [
  { type: "corporate", name: "Corporativas" },
  { type: "casual", name: "Casuais" },
  { type: "thematic", name: "Temáticas" },
  { type: "event", name: "Eventos" },
  { type: "pregnant", name: "Gestantes" },
];

const corporateEssays = dataBase.filter(
  (essay) => essay.category === "Corporativas"
);

const casualEssays = dataBase.filter((essay) => essay.category === "Casuais");

const thematicEssays = dataBase.filter(
  (essay) => essay.category === "Temáticas"
);

const eventEssays = dataBase.filter((essay) => essay.category === "Eventos");

const pregnantEssays = dataBase.filter(
  (essay) => essay.category === "Gestantes"
);

export const Gallery = () => {
  const [category, setCategory] = useState("corporate");

  const handleCategoryChange = (categoryType) => {
    setCategory(categoryType);
  };

  const defineEssaysToDisplay = () => {
    if (category === "all") {
      return allEssays;
    }

    if (category === "corporate") {
      return corporateEssays;
    }

    if (category === "casual") {
      return casualEssays;
    }

    if (category === "thematic") {
      return thematicEssays;
    }

    if (category === "event") {
      return eventEssays;
    }

    if (category === "pregnant") {
      return pregnantEssays;
    }
  };

  const { essayCategory } = useParams();

  const handleCategoryParams = (category) => {
    let categoryLowerCase = category.toLowerCase();
    switch (categoryLowerCase) {
      case "corporativas":
        return "corporate";

      case "casuais":
        return "casual";

      case "temáticas":
        return "thematic";

      case "eventos":
        return "event";

      case "gestantes":
        return "pregnant";

      default:
        return "all";
    }
  };

  useEffect(() => {
    if (essayCategory && essayCategory.length >= 1) {
      let category = handleCategoryParams(essayCategory);
      setCategory(category);
    }
  }, [essayCategory]);

  return (
    <GalleryContainer>
      <h2>Escolha o ensaio que deseja explorar!</h2>
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

      <PhotoEssaysContainer>
        {defineEssaysToDisplay().map((image) => (
          <PhotoEssay imageObject={image} />
        ))}
      </PhotoEssaysContainer>
    </GalleryContainer>
  );
};

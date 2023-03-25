import React from "react";
import CustomCard from "../../components/Packs/CustomCard";
import ServiceCard from "../../components/Packs/ServiceCard";
import { PacksContainer, PacksDisplayContainer } from "./styles";

export const Packs = () => {
  return (
    <PacksContainer>
      <h1>
        Está pronta para investir na sua imagem?
        <br />
        Escolha um dos pacotes e solicite um orçamento
      </h1>

      <PacksDisplayContainer>
        <ServiceCard type={"basic"} />
        <ServiceCard type={"pro"} />
        <ServiceCard type={"premium"} />
      </PacksDisplayContainer>

      <CustomCard />
    </PacksContainer>
  );
};

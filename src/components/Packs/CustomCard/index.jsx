import React from "react";
import { Link } from "react-router-dom";
import { CustomCardContiner, RequestQuote } from "./styles";

const customPackLink =
  "https://api.whatsapp.com/send?phone=5571993741710&text=Ol%C3%A1,%20Laine!%0A%0AGostaria%20de%20realizar%20um%20or%C3%A7amento%20para%20o%20meu%20*EVENTO*.";
const CustomCard = () => {
  return (
    <CustomCardContiner>
      <h2>Eventos</h2>

      <p>
        Deseja registrar um evento especial? Clique no botão abaixo para
        solicitar um orçamento personalizado para cobertura do seu evento.
      </p>

      <Link to={customPackLink} target="_blank">
        <RequestQuote>Solicitar Orçamento</RequestQuote>
      </Link>
    </CustomCardContiner>
  );
};

export default CustomCard;

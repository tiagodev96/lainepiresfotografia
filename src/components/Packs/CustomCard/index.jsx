import React from "react";
import { Link } from "react-router-dom";
import { directLink } from '../constants';
import { CustomCardContiner, RequestQuote } from "./styles";


const CustomCard = () => {
  return (
    <CustomCardContiner>
      <h2>Eventos</h2>

      <p>
        Deseja registrar um evento especial? Clique no botão abaixo para
        solicitar um orçamento personalizado para cobertura do seu evento.
      </p>

      <Link to={directLink} target="_blank">
        <RequestQuote>Solicitar Orçamento</RequestQuote>
      </Link>
    </CustomCardContiner>
  );
};

export default CustomCard;

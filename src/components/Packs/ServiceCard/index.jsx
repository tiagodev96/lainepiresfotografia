import React from "react";
import {
  BasicAmountContainer,
  BasicServiceCard,
  PremiumAmountContainer,
  PremiumServiceCard,
  ProAmountContainer,
  ProServiceCard,
  RequestQuote,
} from "./styles";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { directLink } from '../constants';

const ServiceCard = ({ type }) => {
  return (
    <>
      {type === "basic" ? (
        <BasicServiceCard>
          <CheckOutlinedIcon
            sx={{
              fontSize: 60,
              position: "absolute",
              top: -30,
              backgroundColor: "#3D3D3D",
              borderRadius: "50%",
              padding: 0.5,
              color: "#fff",
            }}
          />
          <h2>Básico</h2>
          <ul>
            <li>Ajuda na montagem do look e cenário</li>
            <li>1 hora de ensaio</li>
          </ul>
          <BasicAmountContainer>
            <h3>15 Fotos Tratadas</h3>
          </BasicAmountContainer>
          <Link to={directLink} target="_blank">
            <RequestQuote>Solicitar Orçamento</RequestQuote>
          </Link>
        </BasicServiceCard>
      ) : type === "pro" ? (
        <ProServiceCard>
          <StarIcon
            sx={{
              fontSize: 60,
              position: "absolute",
              top: -30,
              backgroundColor: "#3D3D3D",
              color: "#fff",
              borderRadius: "50%",
              padding: 0.5,
            }}
          />
          <h2>Pro</h2>
          <ul>
            <li>Ajuda na montagem do look e cenário</li>
            <li>1h30 de ensaio</li>
          </ul>
          <ProAmountContainer>
            <h3>25 Fotos Tratadas</h3>
          </ProAmountContainer>
          <Link to={directLink} target="_blank">
            <RequestQuote>Solicitar Orçamento</RequestQuote>
          </Link>
        </ProServiceCard>
      ) : (
        <PremiumServiceCard>
          <DiamondIcon
            sx={{
              fontSize: 60,
              position: "absolute",
              top: -30,
              backgroundColor: "#18020C",
              color: "#fff",
              borderRadius: "50%",
              padding: 0.5,
            }}
          />
          <h2>Premium</h2>
          <ul>
            <li>Ajuda na montagem do look e cenário</li>
            <li>2 horas de ensaio</li>
            <li style={{ color: "#3D3D3D" }}>Maquiadora profissional</li>
          </ul>
          <PremiumAmountContainer>
            <h3>35 Fotos Tratadas</h3>
          </PremiumAmountContainer>
          <Link to={directLink} target="_blank">
            <RequestQuote>Solicitar Orçamento</RequestQuote>
          </Link>
        </PremiumServiceCard>
      )}
    </>
  );
};

export default ServiceCard;

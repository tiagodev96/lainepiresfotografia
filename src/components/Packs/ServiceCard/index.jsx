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
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Link } from "react-router-dom";

const basicLink =
  "https://api.whatsapp.com/send?phone=5571993741710&text=Ol%C3%A1,%20Laine!%0A%0AGostaria%20de%20receber%20um%20or%C3%A7amento%20para%20o%20*PACOTE%20B%C3%81SICO*.";

const proLink =
  "https://api.whatsapp.com/send?phone=5571993741710&text=Ol%C3%A1,%20Laine!%0A%0AGostaria%20de%20receber%20um%20or%C3%A7amento%20para%20o%20*PACOTE%20PRO*.";

const premiumLink =
  "https://api.whatsapp.com/send?phone=5571993741710&text=Ol%C3%A1,%20Laine!%0A%0AGostaria%20de%20receber%20um%20or%C3%A7amento%20para%20o%20*PACOTE%20PREMIUM*.";

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
          <Link to={basicLink} target="_blank">
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
          <Link to={proLink} target="_blank">
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
          <Link to={premiumLink} target="_blank">
            <RequestQuote>Solicitar Orçamento</RequestQuote>
          </Link>
        </PremiumServiceCard>
      )}
    </>
  );
};

export default ServiceCard;

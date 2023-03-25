import React from "react";
import { Link } from "react-router-dom";
import { CustomCardContiner } from "./styles";

const customPackLink =
  "https://api.whatsapp.com/send?phone=5571993741710&text=Ol%C3%A1,%20Laine!%0A%0AGostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20*PACOTE%20PERSONALIZADO*.";

const CustomCard = () => {
  return (
    <CustomCardContiner>
      <h2>
        Não encontrou nenhum pacote que se encaixe na sua necessidade?
        <br />
        Solicite um pacote personalizado
      </h2>

      <Link to={customPackLink} target="_blank">
        <button>Solicitar Pacote</button>
      </Link>
    </CustomCardContiner>
  );
};

export default CustomCard;

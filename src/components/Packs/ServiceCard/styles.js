import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  color: ${(props) => props.theme["black"]};
  height: 450px;
  border: 3px solid transparent;
  background-color: #fff;

  h2 {
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 3px solid ${(props) => props.theme["black"]};
    width: 200px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-weight: bold;
    }
  }
`;

export const BasicServiceCard = styled(ServiceCardContainer)`
  border-color: ${(props) => props.theme["secondary"]};
`;
export const ProServiceCard = styled(ServiceCardContainer)`
  border-color: ${(props) => props.theme["secondary"]};
`;
export const PremiumServiceCard = styled(ServiceCardContainer)`
  border-color: ${(props) => props.theme["black"]};
`;

const PicturesAmountContainer = styled.div`
  background-color: transparent;
  padding: 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme["white"]};

  h3 {
    font-size: 1.75rem;
  }
`;

export const BasicAmountContainer = styled(PicturesAmountContainer)`
  background-color: ${(props) => props.theme["secondary"]};
`;

export const ProAmountContainer = styled(PicturesAmountContainer)`
  background-color: ${(props) => props.theme["secondary"]};
`;

export const PremiumAmountContainer = styled(PicturesAmountContainer)`
  background-color: ${(props) => props.theme["black"]};
`;

export const RequestQuote = styled.p`
  font-weight: bold;
  border: 1px solid ${(props) => props.theme["black"]};
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    transform: translateY(-4px);
    border-color: #008000;
    background-color: #008000;
    color: ${(props) => props.theme["white"]};
  }
`;

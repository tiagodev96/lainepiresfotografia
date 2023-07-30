import styled from "styled-components";

export const CustomCardContiner = styled.div`
  padding: 1rem 4%;
  background-color: ${(props) => props.theme["white"]};
  border: 3px solid ${(props) => props.theme["black"]};
  border-radius: 8px;
  color: ${(props) => props.theme["black"]};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;

  h2,
  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 3px solid ${(props) => props.theme["black"]};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: bold;
  }

  a {
    width: 300px;
    margin: 0 auto;
    text-align: center;

    button {
      border-radius: 8px;
      padding: 0.5rem;
      background-color: ${(props) => props.theme["black"]};
      color: ${(props) => props.theme["white"]};
      border: 1px solid transparent;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      width: 100%;

      &:hover {
        transform: translateY(-4px);
        background-color: ${(props) => props.theme["secondary"]};
      }
    }
  }
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

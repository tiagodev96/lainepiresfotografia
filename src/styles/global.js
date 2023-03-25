import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
  } 

  a{
    text-decoration: none;
    color: inherit;

  }
`;

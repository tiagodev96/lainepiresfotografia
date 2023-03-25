import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);

  background-color: ${(props) => props.theme["white"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

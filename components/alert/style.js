import styled from "styled-components";

export const AlertWrapper = styled.div`
  .color {
    color: ${(props) => (props.type === "success" ? "green" : "red")};
  }
`;

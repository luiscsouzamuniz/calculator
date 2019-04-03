import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: ${props => props.widthButton || 24}%;
  margin: 0.5%;
`;

export const NumericButton = props => (
  <StyledButton value={props.value} {...props}>
    {props.value}
  </StyledButton>
);

export const OperationButton = props => (
  <StyledButton value={props.value} {...props}>
    {props.value}
  </StyledButton>
);

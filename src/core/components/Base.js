import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";

const StyledCardBody = styled(CardBody)`
  background-color: ${props => props.background || "#eee"};
  width: 30%;
  margin: 0 auto;
  border-radius: 15px;
`;

export const Base = props => <StyledCardBody {...props} />;

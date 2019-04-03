import React, { Fragment, useState } from "react";
import { Input } from "reactstrap";
import styled from "styled-components";

const OnOff = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${props => props.backgroundColor || "red"};
  margin-top: -15px;
  margin-bottom: 10px;
  filter: brightness(100%);
`;

const StyledInput = styled(Input)`
  text-align: right;
`;

export const CalculateScreen = props => {
  return (
    <Fragment>
      <OnOff {...props} />
      <StyledInput type="text" {...props} />
    </Fragment>
  );
};

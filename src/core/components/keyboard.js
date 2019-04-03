import React, { Fragment } from "react";
import { Row } from "reactstrap";

import { NumericButton, OperationButton } from "./Button";

export const Keyboard = props => {
  return (
    <Fragment>
      <Row>
        <OperationButton
          value="C"
          color={props.functionButton || "secondary"}
          disabled={props.disable}
          onClick={props.onClickClean}
          onDoubleClick={props.clickOnOff}
        />
        <OperationButton
          value="ON"
          color={props.functionButton || "secondary"}
          onClick={props.clickOnOff}
          disabled={!props.disable}
        />
        <OperationButton
          value="DEL"
          color={props.functionButton || "secondary"}
          disabled={props.disable}
          onClick={props.onClickDel}
        />
        <OperationButton
          value="+"
          onClick={props.onClickChange}
          color={props.operationButton || "danger"}
          disabled={props.disable}
        />
      </Row>
      <Row>
        <NumericButton
          value={1}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <NumericButton
          value={2}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <NumericButton
          value={3}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <OperationButton
          value="-"
          onClick={props.onClickChange}
          color={props.operationButton || "danger"}
          disabled={props.disable}
        />
      </Row>
      <Row>
        <NumericButton
          value={4}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <NumericButton
          value={5}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <NumericButton
          value={6}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <OperationButton
          value="/"
          onClick={props.onClickChange}
          color={props.operationButton || "danger"}
          disabled={props.disable}
        />
      </Row>
      <Row>
        <NumericButton
          value={7}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <NumericButton
          value={8}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <NumericButton
          value={9}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <OperationButton
          value="*"
          onClick={props.onClickChange}
          color={props.operationButton || "danger"}
          disabled={props.disable}
        />
      </Row>
      <Row>
        <OperationButton
          value="="
          onClick={props.onClickEqual || "warning"}
          color={props.equalButton}
          disabled={props.disable}
        />
        <NumericButton
          value={0}
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <OperationButton
          value="."
          onClick={props.onClickChange}
          color={props.numericButton || "primary"}
          disabled={props.disable}
        />
        <OperationButton
          value={props.parentheses.value}
          onClick={props.onClickParentheses}
          color={props.operationButton || "danger"}
          disabled={props.disable}
        />
      </Row>
    </Fragment>
  );
};

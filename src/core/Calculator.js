import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { Base } from "./components/Base";
import { CalculateScreen } from "./components/Screen";
import { Keyboard } from "./components/keyboard";

const StyledCol = styled(Col)`
  margin-top: 10px;
`;

const Calculator = props => {
  /*
   * useState => https://reactjs.org/docs/hooks-state.html
   */

  const [onOff, setOnOff] = useState("rgba(255, 100, 0, 1)");
  const [readOnly, setReadOnly] = useState(true);
  const [disable, setDisable] = useState(true);
  const [expression, setExpression] = useState("");
  const [parentheses, setParentheses] = useState({ value: "(", status: true });

  const handleOnChange = value => {
    if (readOnly === false) {
      if (expression === 0) {
        setExpression(value.target.value);
      } else {
        setExpression(expression + value.target.value);
      }
    }
  };

  const handleOnClickParentheses = () => {
    if (parentheses.status) {
      if (expression === 0) {
        setExpression(parentheses.value);
      } else {
        setExpression(expression + parentheses.value);
      }
      setParentheses({ value: ")", status: false });
    } else {
      setExpression(expression + parentheses.value);
      setParentheses({ value: "(", status: true });
    }
  };

  const handleOnClickEqual = () => {
    const result = eval(expression);
    if (result !== false) {
      setExpression(result);
    } else {
      setExpression("Algo de errado não está certo!");
    }
  };

  const handleOnClickClean = () => {
    setExpression(0);
  };

  const handleClickOnOff = event => {
    if (event.target.value === "ON") {
      setOnOff("lightgreen");
      setExpression(0);
      setReadOnly(false);
      setDisable(false);
    }

    if (event.target.value === "C") {
      setExpression("");
      setReadOnly(true);
      setDisable(true);
      setOnOff("#ff6347");
    }
  };

  const handleOnClickDel = () => {
    if (expression.length !== 1) {
      setExpression(expression.substr(0, expression.length - 1));
    } else {
      setExpression(0);
    }
  };

  const handleOnClickOperation = event => {
    const value = expression.substr(-1, expression.length - 1);
    const operation = ["*", "/", "+", "-", "(", "."];
    if (operation.includes(value) === false) {
      setExpression(expression + event.target.value);
    }
  };

  return (
    <Col md={12}>
      <Base background={props.theme.background}>
        <Col>
          <Row>
            <CalculateScreen
              backgroundColor={onOff}
              readOnly={readOnly}
              value={expression}
            />
          </Row>
        </Col>
        <StyledCol>
          <Keyboard
            onClickClean={handleOnClickClean}
            onClickEqual={handleOnClickEqual}
            onClickChange={handleOnChange}
            clickOnOff={handleClickOnOff}
            onClickDel={handleOnClickDel}
            onClickParentheses={handleOnClickParentheses}
            onClickOperation={handleOnClickOperation}
            disable={disable}
            numericButton={props.theme.numericButton}
            equalButton={props.theme.equalButton}
            functionButton={props.theme.functionButton}
            operationButton={props.theme.operationButton}
            parentheses={parentheses}
          />
        </StyledCol>
      </Base>
    </Col>
  );
};

export default Calculator;

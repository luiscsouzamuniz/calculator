import React, { Component } from "react";
import { Button } from "reactstrap";
import Calculator from "./core/Calculator";
import { Col } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin: 5px;
`;

class App extends Component {
  state = {
    theme: {
      background: "#eee",
      numericButton: "primary",
      operationButton: "danger",
      equalButton: "warning",
      functionButton: "secondary"
    }
  };

  handleOnClickTheme = event => {
    const value = event.target.value;
    const theme = {
      light: {
        background: "#ddd",
        numericButton: "info",
        operationButton: "warning",
        equalButton: "success",
        functionButton: "primary"
      },
      default: {
        background: "#eee",
        numericButton: "primary",
        operationButton: "danger",
        equalButton: "warning",
        functionButton: "secondary"
      },

      dark: {
        background: "#000",
        numericButton: "primary",
        operationButton: "danger",
        equalButton: "warning",
        functionButton: "info"
      }
    };
    this.setState({
      theme: theme[value]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calculator theme={this.state.theme} />

        <Col className="text-center" style={{ marginTop: "10px" }}>
          <h4>Temas</h4>
          <StyledButton
            value="default"
            color="primary"
            onClick={this.handleOnClickTheme}
          >
            Default
          </StyledButton>

          <StyledButton
            value="light"
            color="info"
            onClick={this.handleOnClickTheme}
          >
            Light
          </StyledButton>
          <StyledButton
            value="dark"
            color="secondary"
            onClick={this.handleOnClickTheme}
          >
            Dark
          </StyledButton>
        </Col>
      </div>
    );
  }
}

export default App;

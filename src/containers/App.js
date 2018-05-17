import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`color: gray;`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <p>Default CRA config</p>
      </StyledDiv>
    );
  }
}

export default App;

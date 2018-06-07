import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  static propTypes = {};
  static defaultProps = {};
  state = {};

  render() {
    return (
      <StyledDiv>
        <Header />
        <p>Hi</p>
      </StyledDiv>
    );
  }
}

export default connect(
  () => ({}),
  {},
)(App);

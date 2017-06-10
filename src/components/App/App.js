import React, { Component } from "react";
import { Col, Grid, Navbar, Row } from "react-bootstrap";
import IntroText from "../IntroText/IntroText";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">YouTrees</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={12}>
              <IntroText />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

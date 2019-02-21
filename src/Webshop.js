import React, { Component } from "react";
import WebshopItemList from "./WebshopItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Webshop.scss";

class Webshop extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col--left">
            <div id="root">
              <WebshopItemList />
            </div>
          </Col>
          <Col className="col--right">2 of 2</Col>
        </Row>
      </Container>
    );
  }
}

export default Webshop;

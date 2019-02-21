import React, { Component } from "react";
import WebshopItemList from "./WebshopItemList";
import WebshopCart from "./WebshopCart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Webshop.scss";
import faker from "faker";

class Webshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.pushDataToCard(),
      selectedProductIndex: []
    };
  }

  pushDataToCard = () => {
    const newArr = [];
    for (var i = 0; i < 12; i++) {
      newArr.push({
        image: faker.random.image(),
        name: faker.name.findName(),
        price: faker.finance.amount()
      });
      console.log(newArr[i]);
    }
    return newArr;
  };

  pushSelectedProductIndex = i => {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col--left">
            <WebshopItemList
              cardData={this.state.card}
              selectedProductIndex={this.pushSelectedProductIndex}
            />
          </Col>
          <Col className="col--right">
            <WebshopCart />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Webshop;

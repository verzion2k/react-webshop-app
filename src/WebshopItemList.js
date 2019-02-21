import React, { Component } from "react";
import "./WebshopItemList.scss";
import faker from "faker";
import WebshopItem from "./WebshopItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class WebshopItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.pushDataToCard()
    };
  }

  pushDataToCard = () => {
    const newArr = [];
    for (var i = 0; i < 12; i++) {
      newArr.push({
        image: faker.random.image(),
        name: faker.name.findName(),
        price: faker.commerce.price()
      });
    }
    return newArr;
  };

  render() {
    const cardList = this.state.card.map((r, index) => (
      <WebshopItem card={this.state.card} key={index} {...r} />
    ));
    return (
      <>
        <Container>
          <Row className="justify-content-center">{cardList}</Row>
        </Container>
      </>
    );
  }
}

export default WebshopItemList;

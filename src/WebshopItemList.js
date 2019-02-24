import React, { Component } from "react";
import "./WebshopItemList.scss";
import WebshopItem from "./WebshopItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class WebshopItemList extends Component {
  render() {
    const cardList = this.props.cardData.map((data, index) => (
      <WebshopItem
        key={index}
        {...data}
        arrayIndex={index}
        pushToCart={this.props.pushToCart}
      />
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

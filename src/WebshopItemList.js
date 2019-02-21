import React, { Component } from "react";
import "./WebshopItemList.scss";
import WebshopItem from "./WebshopItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class WebshopItemList extends Component {
  render() {
    const cardList = this.props.cardData.map((data, index) => (
      <WebshopItem card={this.props.cardData} key={index} {...data} />
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

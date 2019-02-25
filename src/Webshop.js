import React, { Component } from "react";
import WebshopItemList from "./WebshopItemList";
import WebshopCartContainer from "./WebshopCartContainer";
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
        price: faker.random.number({ min: 0, max: 10000 })
      });
    }
    return newArr;
  };

  pushToCart = i => {
    if (this.state.selectedProductIndex.includes(i) === false) {
      this.setState(
        prevState => ({
          selectedProductIndex: [...prevState.selectedProductIndex, i]
        }),
        () => {
          console.log(this.state.selectedProductIndex);
        }
      );
    } else {
      console.log("This index is already added into the array");
    }
  };

  addToCart = () => {
    const itemsWithIndex = [];

    this.state.card.map((el, i) => {
      if (this.state.selectedProductIndex.includes(i)) {
        itemsWithIndex.push({ ...el, index: i });
      }
    });

    return itemsWithIndex;
  };

  removeProduct = i => {
    const products = this.state.selectedProductIndex;

    products.splice(products.indexOf(i), 1);

    this.setState(
      {
        selectedProductIndex: products
      },
      () => {
        console.log(this.state.selectedProductIndex);
      }
    );
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col--left">
            <WebshopItemList
              cardData={this.state.card}
              pushToCart={this.pushToCart}
            />
          </Col>
          <Col className="col--right">
            <WebshopCartContainer
              addToCart={this.addToCart()}
              removeProduct={this.removeProduct}
              selectedProductIndex={this.state.selectedProductIndex}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Webshop;

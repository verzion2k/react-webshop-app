import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./WebshopItem.scss";

class WebshopItem extends Component {

  render() {
    const { image, name, price } = this.props;
    return (
      <>
        <Card className="card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price} $</Card.Text>
            <Button variant="primary" onClick={this.props.pushToCart}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default WebshopItem;

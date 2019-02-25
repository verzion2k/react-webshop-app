import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./WebshopCartContainer.scss";
import WebshopCartItem from "./WebshopCartItem";

class WebshopCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: {}
    };
  }

  totalPrice = (price, i) => {
    this.setState(
      prevState => ({
        total: { ...prevState.total, [i]: price }
      }),
      () => {
        console.log(this.state.total);
      }
    );
  };

  removeFromTotal = i => {
    this.setState(
      {
        total: delete this.state.total.i
      },
      () => {
        console.log(this.state.total);
      }
    );
  };

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Price With Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.addToCart.map((el, i) => {
            return (
              <WebshopCartItem
                cartElement={el}
                cartIndex={i}
                key={i}
                removeProduct={this.props.removeProduct}
                totalPrice={this.totalPrice}
              />
            );
          })}

          {this.props.selectedProductIndex.length !== 0 && (
            <tr>
              <td>Summed Price: </td>
              <td>
                <button onClick={this.removeFromTotal}>Continue</button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default WebshopCartContainer;

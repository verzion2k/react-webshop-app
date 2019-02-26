import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./WebshopCartContainer.scss";
import WebshopCartItem from "./WebshopCartItem";
import WebshopCartForm from "./WebshopCartForm";

class WebshopCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: {},
      viewForm: false
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
    const total = { ...this.state.total };
    const filtered = {};

    Object.keys(total)
      .filter(key => key != i)
      .map(index => {
        const totalFiltered = total[index];
        filtered[index] = totalFiltered;
      });

    this.setState(
      {
        total: filtered
      },
      () => {
        console.log(i, this.state.total);
      }
    );
  };

  sumProductPrices = () => {
    let total = 0;
    Object.keys(this.state.total).map(i => {
      total += this.state.total[i];
    });

    return total;
  };

  handleOnContinue = e => {
    e.preventDefault();

    this.setState(
      {
        viewForm: true
      },
      () => {
        console.log(this.state.viewForm);
      }
    );
  };

  render() {
    return (
      <>
        {!this.state.viewForm ? (
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
              {this.props.addToCart.map(el => {
                return (
                  <WebshopCartItem
                    cartElement={el}
                    cartIndex={el.index}
                    key={el.index}
                    removeProduct={this.props.removeProduct}
                    totalPrice={this.totalPrice}
                    removeFromTotal={this.removeFromTotal}
                  />
                );
              })}

              {this.props.selectedProductIndex.length !== 0 && (
                <tr>
                  <td>Summed Price: {this.sumProductPrices()} $</td>
                  <td>
                    <button onClick={this.handleOnContinue}>Continue</button>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        ) : (
          <WebshopCartForm />
        )}
      </>
    );
  }
}

export default WebshopCartContainer;

import React, { Component } from "react";

class WebshopCartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleOnChange = e => {
    this.props.totalPrice();
    this.setState({
      quantity: e.target.value
    });
  };

  removeProductRow = () => {
    this.props.removeProduct(this.props.cartElement.index);
  };

  render() {
    return (
      <tr>
        <td>
          <img
            src={this.props.cartElement.image}
            alt="randomImg"
            className="data-img"
          />
        </td>
        <td>{this.props.cartElement.name}</td>
        <td>{this.props.cartElement.price} $</td>
        <td>
          <input
            type="number"
            min="1"
            max="10"
            name="quantity"
            onChange={this.handleOnChange}
            value={this.state.quantity}
          />
        </td>
        <td>{this.props.cartElement.price * this.state.quantity} $</td>
        <td>
          <button onClick={this.removeProductRow}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default WebshopCartItems;

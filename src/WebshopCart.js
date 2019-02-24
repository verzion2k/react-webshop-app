import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import faker from "faker";
import "./WebshopCart.scss";

class WebshopCart extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <img
                src={faker.random.image()}
                alt="randomImg"
                className="data-img"
              />
            </td>
            <td>Mark</td>
            <td>50 $</td>
            <td>
              <input type="number" min="1" max="10" defaultValue="1" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src={faker.random.image()}
                alt="randomImg"
                className="data-img"
              />
            </td>
            <td>Mark</td>
            <td>50 $</td>
            <td>
              <input type="number" min="1" max="10" defaultValue="1" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={faker.random.image()}
                alt="randomImg"
                className="data-img"
              />
            </td>
            <td>Mark</td>
            <td>50 $</td>
            <td>
              <input type="number" min="1" max="10" defaultValue="1" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={faker.random.image()}
                alt="randomImg"
                className="data-img"
              />
            </td>
            <td>Mark</td>
            <td>50 $</td>
            <td>
              <input type="number" min="1" max="10" defaultValue="1" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={faker.random.image()}
                alt="randomImg"
                className="data-img"
              />
            </td>
            <td>Mark</td>
            <td>50 $</td>
            <td>
              <input type="number" min="1" max="10" defaultValue="1" />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default WebshopCart;

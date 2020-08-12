import React from 'react';
import { Link } from 'react-router-dom';
import '../router/router.css';

class Products extends React.Component {

  state= {
    products: [
      {
        "id": 1,
        "name": "Bicycle",
        "price": 30,
        "quantity": 15,
        "desc": "Bicycle is Good"
      },
      {
        "id": 2,
        "name": "TV",
        "price": 40,
        "quantity": 16,
        "desc": "TV is good"
      },
      {
        "id": 3,
        "name": "Pencil",
        "price": 50,
        "quantity": 17,
        "desc": "Pencil is good"
      }
    ]
  }



  render() {
    return <div className="content flex-col">
      <span>All Products</span>
      {this.state.products.map(e => <span className="to-orange">{e.name}</span>)}
    </div>
  }
}
export default Products;

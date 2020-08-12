import React from 'react';
import '../router/router.css';
import { Route } from 'react-router';

class Details extends React.Component {

  
  render() {
    return <div className="content flex-col">
      <h3>Product Details</h3>
      <span>Name: {this.props.location.state.name}</span>
      <span>Id: {this.props.location.state.id}</span>
      <span>Price: {this.props.location.state.price}</span>
      <span>Quantity: {this.props.location.state.quantity}</span>
      <span>Desc: {this.props.location.state.desc}</span>
      <span>URL: /products/{this.props.location.state.id}</span>
    </div>
  }
}
export default Details;

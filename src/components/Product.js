

import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        <div className="card mb-4 box-shadow">
            <div className="card-body">
                <img className="product--img" src={this.props.image} alt="" />
                <ul className="list-unstyled mt-3 mb-4">
                    
                    <li>
                        <h5 className="card-title pricing-card-title">{this.props.name}</h5>
                    </li>
                    <li>
                        <p>{this.props.price}</p>
                    </li>
                </ul>
                <button type="button" className="btn btn-primary">Mua Hàng</button>
            </div>
        </div>
    );
  }
}


export default Product;

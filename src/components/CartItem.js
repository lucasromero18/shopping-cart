import React, { Component } from 'react';

const productUnderline = {
  styles: {
    borderBottom: "1px solid black"
  }
}


const CartItem = ({item}) => {
    return(
        <div class="collection-item">
        <div class="row">
          <div style={productUnderline.styles} className="col-md-8">{item.product.name}</div>
          <div style={productUnderline.styles} className="col-md-2">{item.product.priceInCents}</div>
          <div style={productUnderline.styles} className="col-md-2">{item.quantity}</div>
        </div>
        <div>
        </div>
      </div>
    )
}

export default CartItem;
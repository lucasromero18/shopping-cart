import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/navbar.js'
import CartFooter from './components/footer.js'
import CartItemsContainer from './components/CartItemsContainer.js'
import CartItem from './components/CartItem.js'
import AddItem from './components/AddItem.js'

const totalStyle = {
  styles: {
    marginLeft: "6%"
  }
}


class App extends Component {
  state = {
   products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],

   itemsInCart: [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]

    
  }

  itemsToBeSubmitted = ({productId, quantity}) => {
    console.log('the thing', productId)

    let newObj = {
      id: 4,
      product: this.state.products.filter(product => product.id == productId)[0],
      quantity: quantity
    }
    this.setState({
      itemsInCart: [...this.state.itemsInCart, newObj]
    })
  }

  render() {
    return (
      <>
     <CartHeader />
     <CartItemsContainer CartItemsList={this.state.itemsInCart} itemsToBeSubmitted={this.itemsToBeSubmitted}/>
     <p style={totalStyle.styles}>Total Price in Cents: {this.state.itemsInCart.reduce((accumulator, item) => {
       return accumulator + item.product.priceInCents
     }, 0)}</p>
     <AddItem products={this.state.products} addCartItem={this.itemsToBeSubmitted}/>
     <CartFooter CopyrightYear={2018}/>
     </>
      );
    }
  }

export default App;

import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CartItems from './components/CartItems'
import CartItem from './components/CartItem'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const shoppingList = cartItemsList.map((e, index) => <CartItem key={index} item={e.product.name} price={e.product.priceInCents/100} quantity={e.quantity}/>)


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <CartItems shoppingList={ shoppingList } />


      <Footer copyright="2018"/>
    </div>);
  }
}

export default App;

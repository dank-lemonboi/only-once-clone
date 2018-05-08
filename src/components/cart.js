import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg';
import '../styles/cart.scss';
import axios from 'axios';
import deleteIcon from '../assets/delete-icon.svg';
import {connect} from 'react-redux';
import { removeFromCart } from "../ducks/reducer";
import euro from "../assets/Euro_symbol_black.svg";


class Cart extends Component {
    constructor() {
        super()

        this.state = {
          checkout: false
        }

        this.removeItem = this.removeItem.bind(this)
    }


    removeItem(id) {
       let updateCart = [];
       this.props.cart.filter( (item, index) => {
             if (item.item_number !== id) {
               updateCart = [...updateCart, item];
             }
             return updateCart
            } )
            this.props.removeFromCart(updateCart)      
    }

    componentDidUpdate( prevProps, prevState ) {
      if (this.props.cart.length <= 0) {
        this.props.history.push("/");
      }
      console.log('prevProps', prevProps, 'prevState', prevState.subtotal)
      // Check to see if the current 
      // if ( this.props.cart.length !== prevProps.cart.length ) {
      //   this.getPrice();
      // }
    }

  

    renderCart() {
        let { cart } = this.props;
        let cartItem = cart.map( (item, index) => {
          return (
          <div className="cart-item-parent">
                 <div className="cart-grid">
                
                <div className="cart-item" key={ item.item_number + index }>
                  <span className="delete-button" onClick={() => this.removeItem(item.item_number)}>
                    <div className='delete-container'><img src={deleteIcon} alt="" /></div>
                  </span>
                  <div>
                    <img className="cart-img" src={item.display_photo} alt="" />
                  </div>
                  <span className="item-name">{item.item_name}</span>
                  <span className="item-number">
                    {item.item_number}
                  </span>
                  <span className="quantity-tag">1</span>
                  <span className="price-tag">{`${item.price}`}</span>
                </div>
              </div>
            </div>
          )
        })

        return cartItem;
    }

    // getPrice() {
    //   // map through cart items and return just the prices for all the items
    //   let unitPrice = this.props.cart.map(unit => {
    //     return unit.price
    //   })
    //   // add item prices together
    //   let price = unitPrice.reduce( ( a, b ) => {
    //     return a + b
    //   }, 0)
    //   // set the subtotal of all the unit prices on state
    //   this.setState({
    //     subtotal: price
    //   })
    // }

    render() {

       // map through cart items and return just the prices for all the items
      let unitPrice = this.props.cart.map(unit => {
        return unit.price
      })
      // add item prices together
      let price = unitPrice.reduce( ( a, b ) => {
        return a + b
      }, 0)
      
        console.log(this.state.checkout)

        return (
            <div className="cart-parent">
            <Navbar 
              logo={logo} 
              path={this.props.location.pathname} />
            <span className="cart-banner">YOUR CART</span>
            <section className="cart-wrapper">
              <div className="cart-grid-header">
                <span>Product</span>
                <span>Item No</span>
                <span>Qty.</span>
                <span>Price</span>
              </div>
              <div className="items">{this.renderCart()}</div>

              <img className="badge" src={badge} alt="badge" />
              <div>
                <span>Subtotal</span>
        {/* Calculates subtotal of all items in the cart by calling the getPrice() method above*/}
                <span>{ price }<img className='euro' src={euro} alt=""/></span>
              </div>
              <div onClick={ () => this.setState({ checkout: true })} className='btn-checkout'>Checkout</div>
            </section>
            <Footer />
          </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect( mapStateToProps, { removeFromCart } )(Cart)
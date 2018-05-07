import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg';
import '../styles/cart.scss';
import axios from 'axios';
import deleteIcon from '../assets/delete-icon.svg';
import {connect} from 'react-redux';
import { removeFromCart } from '../ducks/reducer';

class Cart extends Component {
    constructor() {
        super()


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

    renderCart() {
        let { cart } = this.props;
        let cartItem = cart.map( (item, index) => {
          return (
          <div className="cart-item-parent">
                 <div className="cart-grid">
                
                <div className="cart-item" key={item.item_number + index}>
                  <span className="delete-button" onClick={() => this.removeItem(item.item_number)}>
                    <img src={deleteIcon} alt="" />
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



    render() {

        console.log(this.props.cart)
        return (
            <div className="cart-parent">
            <Navbar logo={logo} path={this.props.location.pathname} />
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
                <span>{}</span>
              </div>
              <div className='btn-checkout'>Checkout</div>
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
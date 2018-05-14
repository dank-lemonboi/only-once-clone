import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg';
import '../styles/cart.scss';
import axios from 'axios';
import deleteIcon from '../assets/delete-icon.svg';
import {connect} from 'react-redux';
import euro from "../assets/Euro_symbol_black.svg";
import stripe from '../assets/powered_by_stripe.svg'
import CardSection from '../components/injectedCheckout'
import {Elements} from 'react-stripe-elements'
import { removeFromCart, getTotal, modalEngaged, emptyCart } from "../ducks/reducer";
import Input from './input'
import { Link } from 'react-router-dom'


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
          checkout: false,
          stripeSelect: 'bank'
        }

        this.removeItem = this.removeItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.calculateShipping = this.calculateShipping.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.modalOut = this.modalOut.bind(this)
    }

    handleClick(total) {
      
      this.setState({
        checkout: !this.state.checkout,
      })

      this.props.getTotal(total)
    }

    handleChange(changeEvent) {
      this.setState({
        stripeSelect: changeEvent.target.value
      })
    }

    calculateShipping = () => {
      let shipping = 0
      if(this.props.cart.length === 1) {
        shipping += 50
      } else if (this.props.cart.length === 2) {
        shipping += 75
      } else if (this.props.cart.length >= 3) {
        shipping += 100
      } 
      return shipping
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

    renderCartItem() {
        let { cart } = this.props;
        let cartItem = cart.map( (item, index) => {
          return(
          
          <div className="cart-item-parent">
              <div className="cart-grid">
                <div className="cart-item" key={item.item_number + index}>
                  <span className="delete-button" onClick={() => this.removeItem(item.item_number)}>
                    <div className="delete-container">
                      <img src={deleteIcon} alt="" />
                    </div>
                  </span>
                  <div>
                    <img className="cart-img" src={item.display_photo} alt="" />
                  </div>
                  <span className="item-name">{item.item_name}</span>
                  <span className="item-number">
                    {item.item_number}
                  </span>
                  <span className="quantity-tag">1</span>

        {/* CHANGE THIS BEFORE PRESENTATION */}
                  <span className="price-tag">
                    {`${item.price.toFixed(2)} `} <img className="euro" src={euro} alt="" />
                  </span>
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

    modalOut() {
      axios.get('/api/end').then( () => {
        this.props.emptyCart()
        this.props.modalEngaged(false)
        this.props.history.push('/')
      })
    }

    render() {

      // console.log(this.props.cart[0].item_number)

       // map through cart items and return just the prices for all the items
      let unitPrice = this.props.cart.map(unit => {
        return unit.price
      })
      // add item prices together
      let price = unitPrice.reduce( ( a, b ) => {
        return ((a + b))
      }, 0).toFixed(2)
      
      let tax = ( (+price) * 0.07).toFixed(2)

// convert the price and tax strings to numbers, and add them together with the shipping to get the total.

      let total = ( (+price) + (+tax) + this.calculateShipping()).toFixed(2) 

      //  console.log(this.props)

        return (
            <div className="cart-parent">
            <Navbar 
              logo={logo} 
              path={this.props.location.pathname} />

              <Link to='/store'><span className='bck-button'>Continue Shopping</span></Link>

                <div>
                 <div className={ (!this.props.modalView) ? 'modal-container' : 'modal-container reveal'}>
                    <div className={ (!this.props.modalView) ? 'modal-content' : 'modal-content reveal'}>
                      <img src={logo} alt=""/>
                  <div className='modal-text'>
                      <span>A confirmation text and email are on their way.</span>
                      <span>Our team will ship your order shortly.</span>
                      <br/>
                    <span>Thank you for choosing Only / Once!</span>
                    <span>We hope to see you again {`${this.props.firstName}`}.</span>
                  </div>
                    </div>
                 </div>
                  <div onClick={() => this.modalOut()} className={ (!this.props.modalView) ? 'modal-background' : 'modal-background reveal'}></div>
                </div>

            <div className="cart-banner">YOUR CART</div>
            <section className="cart-wrapper">
          
        {

          (this.state.checkout)

          ?

          <div>
             <span style={ { marginLeft: '20px' } }>Billing Information</span>
              <div className='billing-line-break'></div>
             <Input />

              <div className="cart-grid-header">
                <span>Product</span>
                <span>Item No.</span>
                <span>Qty.</span>
                <span>Price</span>
              </div>
              <div className='product-line-break'></div>
              <div className="items">{this.renderCartItem()}</div>
              <div className='product-line-break-bottom'></div>

              <img className="badge" src={badge} alt="badge" />
              <div className='price-calculations'>
                <span className='sub-label'>Subtotal: </span>
        {/* Calculates subtotal of all items in the cart with the two functions within the Render Method */}
                <span className='cart-subtotal'>
                  { `${price} ` }
                  <img className='euro' src={euro} alt=""/>
                  </span>
                  </div>
                    <div className='shipping-disclaimer'>
                        {/*<div>Shipping (?) <span className='disclaim' style={ {marginLeft: '20px'} }>(We will contact you with the shipping cost & details)</span></div>*/}
                      <div className='tax-label'>Tax: </div>
                        <span className='cart-tax'>{` ${tax} `}
                         <img className='euro' src={euro} alt="" />
                        </span>
                      
                      <div className='ship-label'>Shipping: </div>
                        <span className='cart-ship'>{ ` ${this.calculateShipping().toFixed(2)} ` || 0.00} 
                          <img className='euro' src={euro} alt="" />
                        </span>
                      
                    </div>

              <span style={ { marginLeft: '20px' } }>Payment Information</span>
              <span className='calculations'>Total: <span>{total}</span> <img className='euro' src={euro} alt=""/></span>
              <div className='billing-line-break'></div>
              <div className='payment-info'>
                <div style={ { marginTop: '15px'} }>
                    <input 
                        type='radio' 
                        value='bank'
                        checked={this.state.stripeSelect === 'bank'}
                        onChange={this.handleChange}/>
                        <span> Bank transfer - no charge</span>
                </div>
                <div>
                    <input 
                        type='radio' 
                        value='stripe'
                        checked={this.state.stripeSelect === 'stripe'}
                        onChange={this.handleChange}/>
                        <span> Stripe - 3.2% payment charge <img src={stripe} alt=""/></span>
                </div>

            {

              (this.state.stripeSelect === 'stripe')

              ?
              
              
               <Elements>
                <CardSection
                  itemNumber={this.props.cart.item_number}
                  amount={total}/>
               </Elements>
            

              :

              <div>
                <span>Press Submit to request Bank Transfer 
                information and a detailed Shipping Quote.</span>
                <br/>
                <div id='bank-btn' className='btn-checkout'>Submit</div>
                <span className='disclaim'>We will send the information to the Email you provided above.</span>
                <div className='disclaim'>You will only be billed after receiving your shipping quotation</div>
              </div>

            }

              </div>
        </div>

          :
          
      <div>
        <div className="cart-grid-header">
                <span>Product</span>
                <span>Item No</span>
                <span>Qty.</span>
                <span>Price</span>
              </div>
              <div className='product-line-break'></div>
              <div className="items">{this.renderCartItem()}</div>
              <div className='product-line-break-bottom'></div>
              
              <img className="badge" src={badge} alt="badge" />
              <div>
                <span className='sub-label'>Subtotal</span>
        {/* Calculates subtotal of all items in the cart with the two functions within the Render Method */}
                <span className='cart-subtotal'>
                  { `${price} ` }
                  <img className='euro' src={euro} alt=""/>
                </span>
              </div>

              <div 
                onClick={ () => this.handleClick(total)} 
                className='btn-checkout'>
                Checkout
              </div>
        </div>

        }
            </section>
            <div className='footer-wrapper'>
              <Footer />
            </div>
          </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.customerReducer.cart,
        cartTotal: state.customerReducer.cartTotal,
        firstName: state.customerReducer.billingFirstName,
        lastName: state.customerReducer.billingLastName,
        modalView: state.customerReducer.modalView
    }
}

export default connect( mapStateToProps, { removeFromCart, getTotal, modalEngaged, emptyCart } )( Cart )
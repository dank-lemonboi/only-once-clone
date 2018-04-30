import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import logo from "../assets/images/only_once_logo.svg";
import '../styles/cart.scss'


export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {


        return (

            <div className='cart-parent'>
              <Navbar
               logo={logo}
               path={this.props.location.pathname} />
               Cart View!
              <Footer />
            </div>
        )
    }
}
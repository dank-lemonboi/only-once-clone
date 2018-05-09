import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg';
import '../styles/cart.scss';
import axios from 'axios';
import deleteIcon from '../assets/delete-icon.svg';
import { connect } from 'react-redux';
import euro from "../assets/Euro_symbol_black.svg";
import stripe from '../assets/powered_by_stripe.svg'
import CardSection from '../components/injectedCheckout'
import { Elements } from 'react-stripe-elements'
import { getFirstName, getLastName, getEmail, getPhone } from "../ducks/reducer";



class Input extends Component {
    constructor() {
        super()

        this.state = {
            checkState: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(event) {
        this.setState({
            checkState: !this.state.checkState
        })
    }

    render() {
        console.log(this.props)
        return (

            <section className="input-parent">
                {

                    (!this.state.checkState)

                        ?
                        <section>
                            <div>
                                <span>Country*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>First Name*</span>
                                <input type="text"
                                    onChange={ (e) => this.props.getFirstName(e.target.value)} />
                            </div>
                            <div>
                                <span>Last Name*</span>
                                <input type="text"
                                    onChange={ (e) => this.props.getLastName(e.target.value)} />
                            </div>
                            <div>
                                <span>Company*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Address*</span>
                                <textarea
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Postal Code*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>City*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Email*</span>
                                <input type="email"
                                    onChange={ (e) => this.props.getEmail(e.target.value)} />
                            </div>
                            <div>
                                <span>Phone*</span>
                                <input type="phone"
                                    onChange={ (e) => this.props.getPhone(e.target.value) }/>
                            </div>
                            <div>
                                <input
                                    onClick={(e) => this.toggle(e.target.value)}
                                    type="checkbox" />
                                <span
                                    style={{
                                        width: "130%",
                                        display: "flex",
                                        alignItems: "center",
                                        marginRight: "19%"
                                    }}
                                >
                                    Ship to a different address?
          </span>
                            </div>
                        </section>
                        :
                        <section>
                            <div>
                                <span>Country*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>First Name*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Last Name*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Company*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Address*</span>
                                <textarea
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Postal Code*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>City*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Email*</span>
                                <input type="email"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Phone*</span>
                                <input type="phone"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <input
                                    onClick={(e) => this.toggle(e.target.value)}
                                    type="checkbox" />
                                <span
                                    style={{
                                        width: "130%",
                                        display: "flex",
                                        alignItems: "center",
                                        marginRight: "19%"
                                    }}
                                >
                                    Ship to a different address?
          </span>
                            </div>

                            <div>
                                <span>Country*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>First Name*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Last Name*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Company*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Address*</span>
                                <textarea type='text'
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Postal Code*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>City*</span>
                                <input type="text"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Email*</span>
                                <input type="email"
                                    onChange={() => { }} />
                            </div>
                            <div>
                                <span>Phone*</span>
                                <input type="phone"
                                    onChange={() => { }} />
                            </div>

                            <div>
                                <span>Comments</span>
                                <textarea
                                    onChange={() => { }} />
                            </div>
                        </section>
                }
            </section>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartTotal: state.cartTotal,
        billingFirstName: state.billingFirstName,
        billingLastName: state.billingLastName,
        billingEmail: state.billingEmail,
        billingPhone: state.billingPhone
    }
}

export default connect(mapStateToProps, { getFirstName, getLastName, getEmail, getPhone })(Input) 

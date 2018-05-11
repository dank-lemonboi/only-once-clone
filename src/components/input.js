import React, { Component } from 'react'
import '../styles/cart.scss';
import { connect } from 'react-redux';
import { getFirstName, getLastName, getEmail, getPhone, getPostalCode, getAddress, getState, getCountry, getCity } from "../ducks/reducer";



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
                                    onChange={(e) => this.props.getCountry(e.target.value) } />
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
                                    onChange={(e) => this.props.getAddress(e.target.value) } />
                            </div>
                            <div>
                                <span>Postal Code*</span>
                                <input type="text"
                                    onChange={(e) => this.props.getPostalCode(e.target.value) } />
                            </div>
                            <div>
                                <span>City*</span>
                                <input type="text"
                                    onChange={(e) => this.props.getCity(e.target.value) } />
                            </div>
                            <div>
                                <span>State or Province*</span>
                                <input type="text"
                                    onChange={(e) => this.props.getState(e.target.value) } />
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

    const {
        cart,
        cartTotal,
        billingFirstName,
        billingLastName,
        billingEmail,
        billingPhone,
        country,
        stateProvince,
        address,
        postalCode,
        city
    } = state.customerReducer
    return {
        cart: state.customerReducer.cart,
        cartTotal: state.customerReducer.cartTotal,
        billingFirstName: state.customerReducer.billingFirstName,
        billingLastName: state.customerReducer.billingLastName,
        billingEmail: state.customerReducer.billingEmail,
        billingPhone: state.customerReducer.billingPhone,
        country: state.customerReducer.billingCountry,
        stateProvince: state.customerReducer.billingStateProvince,
        address: state.customerReducer.billingAddress,
        postalCode: state.customerReducer.billingPostalCode,
        city: state.customerReducer.billingCity
    }
}

export default connect(mapStateToProps, { getFirstName, getLastName, getEmail, getPhone, getPostalCode, getAddress, getState, getCountry, getCity })(Input) 

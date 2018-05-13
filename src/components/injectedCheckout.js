import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import {connect} from 'react-redux'
import '../styles/checkout.scss'
import axios from 'axios'
import { modalEngaged } from '../ducks/reducer'


 class CardSection extends Component {
     constructor(props) {
         super(props)

         this.state = {
             value: false
         }

         this.handleSubmit = this.handleSubmit.bind(this)
     }


    handleSubmit = (event) => {

        

        this.setState({
            value: !this.state.value
        }, () => this.props.modalEngaged(this.state.value))

        let textmessage = `Hey ${this.props.billingFirstName}, we just recieved your order. If you have any questions please don't hesitate to contact me. Seriously.`

        let message = 
    `Hey Thank you for choosing Clone Once. Your order is on its way! 
        Just to make sure we have everything set up correctly we wanted to confirm your address is:
                
                ${this.props.billingFirstName} ${this.props.billingLastName}
                ${this.props.billingAddress}
                ${this.props.billingCity} ${this.props.billingStateProvince}
                ${this.props.billingPostalCode}
                ${this.props.billingCountry}
                
        The items you purchased look like they're pretty special, so we want to make sure we got everything right.
        If any of this looks incorrect, or you just want to chat don't hesitate to contact us. :)
        - The only once team.`

        event.preventDefault();

        this.props.stripe.createToken( {name: `${this.props.billingFirstName} ${this.props.billingLastName}` } ).then(({token}) => {
            console.log(token)
            axios.post('/api/charge', {amount: +this.props.cartTotal, stripeToken: token.id}).then(
                axios.post('api/confirmationEmail', {user_email: this.props.billingEmail, message: message } ).then(
                    axios.post('/api/sendText', { user_phone_number: this.props.billingPhone, message: textmessage }).then( 
                        console.log('Email Sent, text sent, and order Confirmed.')
                    ).catch()
                ).catch()
            ).catch()
        }).catch()
        
    }
// Use Lodash throttle method to limit number of times submit can take place in a given period of time.


    render() {

        // console.log(this.props)

        return(
            <div className='stripe'>
                <div>Please enter your payment details below.</div>
                <CardElement
                    className='StripeElement'/>
                <div className='stripe-submit' onClick={(event) => this.handleSubmit(event)}>Submit Payment</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        cart: state.customerReducer.cart,
        stripeToken: state.customerReducer.stripeToken,
        cartTotal: state.customerReducer.cartTotal,
        modalView: state.customerReducer.modalView,
        billingFirstName: state.customerReducer.billingFirstName,
        billingLastName: state.customerReducer.billingLastName,
        billingEmail: state.customerReducer.billingEmail,
        billingPhone: state.customerReducer.billingPhone,
        billingCountry: state.customerReducer.billingCountry,
        billingStateProvince: state.customerReducer.billingStateProvince,
        billingAddress: state.customerReducer.billingAddress,
        billingPostalCode: state.customerReducer.billingPostalCode,
        billingCity: state.customerReducer.billingCity
    }
}

export default injectStripe(connect( mapStateToProps, { modalEngaged } )(CardSection))
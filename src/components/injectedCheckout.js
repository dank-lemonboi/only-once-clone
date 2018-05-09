import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import {connect} from 'react-redux'


 class CardSection extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.stripe.createToken( {name: 'Me'} ).then(({token}) => {
            console.log('Received Stripe Token:', token)
        })
    }

    render() {
        return(
            <div>
                Card Details
                <CardElement style={ {base: { fontSize: '18px' } } }/>
                <div onClick={this.handleSubmit}>Submit</div>
            </div>
        )
    }
}

export default injectStripe(connect()(CardSection))
Ricardo Carosa [7:48 PM]
import React, {Component} from ‘react’;
import axios from ‘axios’;
import StripeCheckout from ‘react-stripe-checkout’;

class Checkout extends Component{

 onToken = (token) => {
     token.card = void 0;  // not storing card information
     console.log(this.props.total)
     axios.post(‘/api/charge’, {token, amount: this.props.total}).then(res => {
         console.log(“woopiieeee”)
     }).catch( err => console.log(err))
 }

 render(){
 return(
     <div>
         <StripeCheckout
             token = {this.onToken}
             stripeKey = {process.env.REACT_APP_STRIPE_KEY}
             amount = {this.props.amount}/>
     </div>
 )
}
}

export default Checkout;
app.post(‘/api/charge’, function(req, res){
 const db = app.get(‘db’)
 console.log(req.body.amount)
 const charge = stripe.charges.create({
     amount: req.body.amount,
     currency: ‘usd’,
     source: req.body.token.id,
     description: ‘Example charge’
   })
   res.sendStatus(200) // clear out cart here
})
, stripe = require(‘stripe’)(process.env.S_STRIPE_KEY)
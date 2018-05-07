import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import { getAll, addToCart } from '../ducks/reducer'

import '../styles/products.scss'

 class Products extends Component { 
    constructor() {
        super()

        this.state = {}

        this.handleClick = this.handleClick.bind(this)
        this.getMeTheProducts = this.getMeTheProducts.bind(this)
    }

  

     handleClick(productId) {
         this.props.addToCart(productId)
    }

    getMeTheProducts() {
        console.log(this.props.products)
        let productList = this.props.products.map(( product, index ) => {
          return <div onClick={() => this.handleClick(product.item_number)} className="product-card" key={product.item_number}>
              <div className="image-parent">
                <img className="image-container" src={product.display_photo} alt="" />
              </div>
            </div>;
        })
        
        return productList;
    }

    render() {

        // console.log(products)
        return (
            <div className='product-parent'>
                <div className='wrap-products'>
                  These are the products
                  { this.getMeTheProducts() }
                </div>
            </div>
        )
    }
 }



let outputActions = {
    getAll: getAll,
    addToCart: addToCart
}

 let mapStateToProps = (state) => {
     if( !state ) {
         return {}
     } 
     let { products, cart }  = state
     return {
         products: products,
         cart: cart
     }
    
 }

 export default connect( mapStateToProps, outputActions )(Products)
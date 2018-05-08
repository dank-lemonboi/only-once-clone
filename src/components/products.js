import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import { getAll, addToCart } from '../ducks/reducer'

import '../styles/products.scss'

 class Products extends Component { 
    constructor() {
        super()

        this.state = {
            isHovering: false
        }

        this.getMeTheProducts = this.getMeTheProducts.bind(this)
    }

  

    

    getMeTheProducts() {
        // console.log(this.props.products)
        let productList = this.props.products.map(( product, index ) => {
          return (
              <Link to={`product/${product.item_name}/${product.item_number}`}><div className="product-card" key={product.item_number}>
              <div className="image-parent">
                <div className={ ( this.state.isHovering ) ? 'product-hover' : 'hidden' }>
                    <span>{product.item_name}</span>
                    <span>{product.price}</span>
                </div>
                <img className="image-container" src={product.display_photo} alt="" />
              </div>
             </div>
            </Link>
        )
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
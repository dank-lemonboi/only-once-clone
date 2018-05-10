import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import euro from "../assets/Euro_symbol_white.svg";
import Footer from "../components/footer";



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
        console.log(this.state.isHovering)
        if (this.props.products.length > 0 ) {
        let productList = this.props.products.map(( product, index ) => {
          return (
              <Link to={`product/${product.item_name}/${product.item_number}`}>
                    <div className="product-card" key={product.item_number}>
                      <div className='product-hover'>
                          <span>{product.item_name}</span>
                          <span className='price-line'><div className='red-dot'></div>{`${product.price}`}<img className='euro' src={euro} alt="" /></span>
                      </div>
                        <div className="image-parent">
                            <div className="image-container">
                              
                                <img src={product.display_photo} alt="" />
                            </div>
                            </div>
                        </div>
              </Link>
            )
        })
        return productList;
    } else {
        console.log('Loading')
     }

    }

    render() {
        
        return (
         <body className="product-parent">
            <div className="wrap-products">
              {this.getMeTheProducts()}
            </div>
            <Footer />
          </body>
        )
    }
 }


 const mapStateToProps = (state) => {
     if( !state ) {
         return {}
     } else {
     let { products, cart }  = state
     return {
         products: products,
         cart: cart
     }
    
 }
}

 export default connect( mapStateToProps, { getAll, addToCart } )(Products)
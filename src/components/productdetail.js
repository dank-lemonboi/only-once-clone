import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getProduct, addToCart } from '../ducks/reducer'
import Navbar from '../components/navbar'
import '../styles/productDetails.scss'
import euro from '../assets/Euro_symbol_black.svg'
import logo from "../assets/images/only_once_logo.svg";



class Details extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this);

    }

    componentWillMount() {
        this.props.getProduct(this.props.match.params.productId)
    }

     handleClick(productId) {     
        this.props.addToCart(productId)
        this.props.history.push('/cart')
    }

    render() {
        let { productId } = this.props.match.params
        let { product } = this.props

        return (
        <body>
            <Navbar
              path={this.props.location.pathname}
              logo={logo}
            />
            <div className='product-container-parent'>
                <section className='product-container-left'>
                    <div className='product-image'>
                      <img src={product.display_photo} alt=""/>
                    </div>
                </section>
                <section className='product-container-right'>
                    <div className='bread-crumb-links'>
                        <span>Store</span> / <span></span>
                    </div>
                    <span className='product-name'>{product.item_name}</span>
                    <div className='product-details'>{product.description}</div>
                    <span>Specifications:</span>
                    <div className='product-specs'>
                        <span>Dimensions: {`L ${product.length} x W ${product.width} x H ${product.height} cm`} </span>
                        <span>Weight: {`${product.weight} kg`}</span>
                        <span>Item No: {`${product.item_number}`}</span>
                    </div>
                    <span>Price: {`${product.price} `}<img className='euro' src={euro} alt=""/></span>
                    <div className='question-links'>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='btn-cart' onClick={() => this.handleClick(product.item_number)}>Add to Cart</div>
                </section>
            </div>
        </body>
        )
    }
}

let mapStateToProps = (state) => {
    
    return {
        product: state.product,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getProduct, addToCart } )(Details)
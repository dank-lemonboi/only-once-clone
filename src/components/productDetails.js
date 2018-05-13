import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getProduct, addToCart, getDetailPhotos, clearDetailPhotos } from '../ducks/reducer'
import '../styles/productDetails.scss'
import euro from '../assets/Euro_symbol_black.svg'
import logo from "../assets/images/only_once_logo.svg";
import axios from 'axios';
import Navbar from '../components/navbar'
import PhotoTile from './detailPhotoTile'
import Footer from './footer'



class Details extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        
        // let { productId } = this.props.match.params
        this.props.getProduct(this.props.match.params.productId)
        const getPhotos = axios.put('api/getItemPhotos', { itemId: this.props.match.params.productId }).then( res => {

            this.props.getDetailPhotos(res.data)
        }).catch()
    }

     handleClick(productId) { 
         console.log(this.props.match.params.productId)    
        this.props.addToCart(this.props.match.params.productId)
        this.props.history.push('/cart')
    }

    componentWillUnmount() {
        this.props.clearDetailPhotos()
    }

    render() {
        console.log(this.props.detailPhotos[0])
        let { productId } = this.props.match.params
        let { product } = this.props

        let detailPhoto = this.props.detailPhotos.map( (picture, i) => <PhotoTile key={picture.photo_id} picture={picture}/> )

        return (
                <div className='detail-parent'>
                    <Navbar
                    path={this.props.location.pathname}
                    logo={logo}
                    />
                    <div className='product-container-parent'>
                        
                            <div className='product-image-wrapper'>
                                <img className='prod-image' src={this.props.product.product_detail_display} alt=""/>
                            </div>
                        
                        <section className='product-container-right'>
                            <div className='bread-crumb-links'>
                                <a href='#/store'><span style={{textTransform: 'uppercase'}}>Store</span></a> / <a href={`#/store/${this.props.match.params.type}`}><span style={ {textTransform: 'uppercase'} }>{this.props.match.params.type}</span></a>
                            </div>
                            <span className='product-name'>{product.item_name}</span>
                            <div className='product-details'>{product.description}</div>
                            <span style={ { marginBottom: '20px', fontWeight: '700', fontSize: '1.1em', letterSpacing: '' } }>Specifications:</span>
                            <div className='product-specs'>
                                <span>Dimensions: <span className='specs'>{`L${ product.length} x W${ product.width} x H${ product.height} cm`}</span> </span>
                                <span>Weight: {`${product.weight} kg`}</span>
                                <span>Item No: {`${product.item_number}`}</span>
                            </div>
                            <span>Price: {`${product.price} `}<img className='euro' src={euro} alt=""/></span>
                            <div className='question-links'>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='btn-cart' onClick={ () => this.handleClick(product.item_number)}>Add to Cart</div>
                        </section>
                        </div>
                            <div className='detail-photo-list'>
                                {detailPhoto}
                            </div>
                                <div className='bottom-section'>
                                    <div>
                                        <p>{product.description}</p>
                                    </div>
                                    <Footer />
                                </div>
                            
                </div>
        )
    }
}

let mapStateToProps = (state) => {
    
    return {
        product: state.customerReducer.product,
        cart: state.customerReducer.cart,
        detailPhotos: state.customerReducer.detailPhotos
    }
}

export default connect(mapStateToProps, { getProduct, addToCart, getDetailPhotos, clearDetailPhotos } )(Details)
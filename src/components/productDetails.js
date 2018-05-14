import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getProduct, addToCart, getDetailPhotos, clearDetailPhotos, getNavNumbers } from '../ducks/reducer'
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
        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);

        let navArr = [];
    
    }

  

    componentDidMount() {    
      this.props.getNavNumbers(+this.props.product.item_number)
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

    nextClick() {
        
    }

    prevClick() {

    }

    render() {
        console.log(this.props.itemNumbers)
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
                        {/*<Link to={`/store/${this.props.prevItem.item_type}/${this.props.prevItem.item_number}`}>*/}<span className='prev-nav'>Previous Product</span>{/*</Link>*/}
                    {/*<Link to={`/store/${this.props.nextItem.item_type}/${this.props.nextItem.item_number}`}>*/}<span className='next-nav'>Next Product</span>{/*</Link>*/}
                            <div className='product-image-wrapper'>
                                <img className='prod-image' src={this.props.product.product_detail_display} alt=""/>
                            </div>
                        
                        <section className='product-container-right'>
                            <div className='bread-crumb-links'>
                                <a href='#/store'><span style={{textTransform: 'uppercase'}}>Store</span></a> / <a href={`#/store/${this.props.match.params.type}`}><span style={ {textTransform: 'uppercase'} }>{this.props.match.params.type}</span></a>
                            </div>
                            <span className='product-name'>{product.item_name}</span>
                            <div className='product-details'>{`${product.description}`}...</div>
                            <span className='btn-toBottom' onClick={ () => window.scrollTo(0, 4500)}>Read More</span>
                            <span style={ { marginTop: '20px', fontWeight: '700', fontSize: '1.1em', letterSpacing: '' } }>Specifications:</span>
                            <div className='product-specs'>
                            <span style={ { marginBottom: '.8em', letterSpacing: '1px' } }>Dimensions: <span className='specs'>{`L${ product.length} x W${ product.width} x H${ product.height} cm`}</span> </span>
                            <span style={ { marginBottom: '.8em', letterSpacing: '1px' } }>Weight: <span className='specs weight'>{`${product.weight} kg`}</span></span>
                            <span style={{ marginBottom: '.8em', letterSpacing: '1px' }}>Item No: <span className='specs item'>{`${product.item_number}`}</span></span>
                            </div>

                            {
                                (this.props.product.sold)

                                ?

                                <span style={ {fontWeight: '300', letterSpacing: '1px', fontStyle: 'italic'} }>This Item has been Sold</span>

                                :


                                <span style={{ display: 'flex' }}>Price: <span className='specs price'><div className='red-dot'></div>{`  ${product.price} `}<img className='euro' src={euro} alt="" /></span></span>
                            }

                            <div className='question-links'>
                                <span>Payment & Delivery</span>
                                <span style={{ marginLeft: '3em' }}>Questions?</span>
                            </div>
                            {
                                (this.props.product.sold)

                                ?

                                null

                                :

                                <div className='btn-cart' onClick={ () => this.handleClick(product.item_number)}>Add to Cart</div>

                            }
                        </section>
                        </div>
                            <div className='detail-photo-list'>
                                {detailPhoto}
                            </div>
                                <div className='bottom-section'>
                                        <p className='full-description'>{product.description}</p>
                                        <div className='top-btn' onClick={ () => window.scrollTo(0,0) }>Back To Top</div>
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
        detailPhotos: state.customerReducer.detailPhotos,
        itemNumbers: state.customerReducer.itemNumbers,
        prevItem: state.customerReducer.prevItem,
        nextItem: state.customerReducer.nextItem
    }
}

export default connect(mapStateToProps, { getProduct, addToCart, getDetailPhotos, clearDetailPhotos, getNavNumbers } )(Details)
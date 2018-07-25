import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct, addToCart, getDetailPhotos, clearDetailPhotos } from '../ducks/reducer'
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

        this.state = {
            navArr: [],
            prevItem: {},
            nextItem: {},
            height: 0
        }

        this.scrollUp = this.scrollUp.bind(this)
        this.scrollBottom = this.scrollBottom.bind(this)
    }




    scrollUp() {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (top > 0) {
            window.scrollTo(0, top - 15)
            setTimeout(this.scrollUp, .05)
        }
    }

    scrollBottom() {
        window.scrollTo(0, 6000)

    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.productId)
        const getPhotos = axios.put('api/getItemPhotos', { itemId: this.props.match.params.productId }).then(res => {
            this.props.getDetailPhotos(res.data)
        }).catch()
         axios.get('/api/navNumbers').then(res => {
            this.setState({
                navArr: res.data
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (+this.props.match.params.productId !== +prevProps.match.params.productId) {
            this.props.clearDetailPhotos()
            this.props.getProduct(this.props.match.params.productId)

        const getPhotos = axios.put('api/getItemPhotos', { itemId: this.props.match.params.productId }).then(res => {
            this.props.getDetailPhotos(res.data)
        }).catch()
        }
    }

    handleClick(productId) {
        const { cart } = this.props
        if (cart.length === 0) {
            this.props.addToCart(this.props.match.params.productId)
            this.props.history.push('/cart')
        } else if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].item_number === +this.props.match.params.productId) {
                    alert(`Sorry, you can't add the same item twice.`)
                    return;
                }
            }
            this.props.addToCart(this.props.match.params.productId)
            this.props.history.push('/cart')

        }
    }
    componentWillUnmount() {
        this.props.clearDetailPhotos()
    }
    nextClick() {
        let {navArr} = this.state
        let currentItem;
        let next;
        for(let i = 0; i < navArr.length; i++) {
            if(navArr[i].item_number === +this.props.match.params.productId) {
                currentItem = navArr.indexOf(navArr[i])
                console.log(currentItem);
                if (currentItem === navArr.length - 1) {
                    next = 0;
                } else {
                    next = currentItem + 1;
                }
                console.log(next)
            }
        }
        this.setState({
            nextItem: navArr[next]
        }, () => this.props.history.push(`/store/${this.state.nextItem.item_type}/${this.state.nextItem.item_number}`))
    }

    prevClick() {
        let {navArr} = this.state
        console.log(navArr.length - 1)
        let currentItem;
        let prev;
        for(let i = 0; i < navArr.length; i++) {
            if(navArr[i].item_number === +this.props.match.params.productId) {
                currentItem = navArr.indexOf(navArr[i])
                if( currentItem !== 0) {
                    prev = currentItem - 1;
                } else {
                    prev = (navArr.length - 1)
                }
            }
        }
        this.setState({
            prevItem: navArr[prev]
        }, () => this.props.history.push(`/store/${this.state.prevItem.item_type}/${this.state.prevItem.item_number}`))
    }

    render() {
        let { productId } = this.props.match.params
        let { product } = this.props

        let detailPhoto = this.props.detailPhotos.map((picture, i) => <PhotoTile key={picture.photo_id} picture={picture} />)

        return (
            <div className='detail-parent'>
                <Navbar
                    path={this.props.location.pathname}
                    logo={logo}
                />
                <div className='product-container-parent'>
                    {/* <Link to={`/store/${this.state.prevItem.item_type}/${this.state.prevItem.item_number}`}>*/}<span onClick={ () => this.prevClick()} className='prev-nav'>Previous Product</span>{/*</Link> */}
                    {/* <Link to={`/store/${this.state.nextItem.item_type}/${this.state.nextItem.item_number}`}>*/}<span onClick={ () => this.nextClick()} className='next-nav'>Next Product</span>{/*</Link> */}
                    <div className='product-image-wrapper'>
                        <img className='prod-image' src={this.props.product.product_detail_display} alt="" />
                    </div>

                    <section className='product-container-right'>
                        <div className='bread-crumb-links'>
                            <a href='#/store'><span style={{ textTransform: 'uppercase' }}>Store</span></a> / <a href={`#/store/${this.props.match.params.type}`}><span style={{ textTransform: 'uppercase' }}>{this.props.match.params.type}</span></a>
                        </div>
                        <span className='product-name'>{product.item_name}</span>
                        <div className='product-details'>{`${product.description}`}...</div>
                        <span className='btn-toBottom' onClick={() => this.scrollBottom()}>Read More</span>
                        <span style={{ marginTop: '20px', fontWeight: '700', fontSize: '1.1em', letterSpacing: '' }}>Specifications:</span>
                        <div className='product-specs'>
                            <span style={{ marginBottom: '.8em', letterSpacing: '1px' }}>Dimensions: <span className='specs'>{`L${product.length} x W${product.width} x H${product.height} cm`}</span> </span>
                            <span style={{ marginBottom: '.8em', letterSpacing: '1px' }}>Weight: <span className='specs weight'>{`${product.weight} kg`}</span></span>
                            <span style={{ marginBottom: '.8em', letterSpacing: '1px' }}>Item No: <span className='specs item'>{`${product.item_number}`}</span></span>
                        </div>

                        {
                            (this.props.product.sold)

                                ?

                                <span style={{ fontWeight: '300', letterSpacing: '1px', fontStyle: 'italic' }}>This Item has been Sold</span>

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

                                <div className='btn-cart' onClick={() => this.handleClick(product.item_number)}>Add to Cart</div>

                        }
                    </section>
                </div>
                <div className='detail-photo-list'>
                    {detailPhoto}
                </div>
                <div id='bottom' className='bottom-section'>
                    <p className='full-description'>{product.description}</p>
                    <div className='top-btn' onClick={() => this.scrollUp()}>Back To Top</div>
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
        // itemNumbers: state.customerReducer.itemNumbers,
        // prevItem: state.customerReducer.prevItem,
        // nextItem: state.customerReducer.nextItem
    }
}

export default connect(mapStateToProps, { getProduct, addToCart, getDetailPhotos, clearDetailPhotos })(Details)
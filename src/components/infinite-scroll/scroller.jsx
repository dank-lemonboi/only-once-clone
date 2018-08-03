import React from 'react';
import fetch from 'isomorphic-fetch';
import axios from 'axios'
import Products from './scroller-products';
import ProductTile from '../productTile'
import { Link } from 'react-router-dom';
import './style.scss'


class Infinite extends React.Component {


        state = {
            products: [],
            per: 6,
            page: 3,
            totalPages: null,
            scrolling: false,
        }

    
    componentWillMount() {
        this.loadProducts()
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    componentWillUnmount() {
        this.scrollListener = window.removeEventListener('scroll', () => {
            this.handleScroll
        })
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state
        if(scrolling) return
        // if(totalPages <= page) return
        const lastLi = document.querySelector('ul.contacts > li:last-child') || 0;
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight || 0;
        const pageOffset = window.pageYOffset + window.innerHeight - (this.props.totalOffset || null) || 0;
        var bottomOffSet = 5;
        if(pageOffset > lastLiOffset - bottomOffSet) {
           return this.loadMore()
        }
    }
    
    loadProducts = () => {
        const { per, page, products } = this.state
        const url = `/api/products`
        axios.get(url, {per, page})
        // .then(res => console.log(res.data))
        .then(res => this.setState({
            products: [...products, ...res.data],
            scrolling: false,
            // totalPages: res.data.total_pages
        }, console.log(res.data)))
    }
    loadMore = () => {
        this.setState(prevState => ({
            page: (this.state.page === 3 ? 6 : 9),
            scrolling: true,
        }), this.loadProducts)
    }

    render() {
        return (
    
            <ul className='contacts'>
                {
                    this.state.products.map( product => <li key={ product.id }><Link to='/store/electronics/30075'><Products {...product}/></Link></li>)
                }
            </ul>
        
        )
    }
}

export default Infinite;
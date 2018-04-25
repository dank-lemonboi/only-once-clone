import React, {Component} from 'react'

import badge from '../assets/images/only_once_badge.svg'

import Carousel from '../components/carousel';
import Navbar from '../components/navbar';
import Products from '../components/products'

export default class Home extends Component {
    render() {
        return (
          <div className=''>
             <Navbar />
             <Carousel />
             <Products />
            <img className='badge' src={badge} alt="badge"/>
          </div>
        )
    }
}
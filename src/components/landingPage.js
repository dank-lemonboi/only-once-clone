'use strict';

import React, {Component} from 'react'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg'
import '../styles/landingPage.scss'
import Carousel from '../components/carousel';
import Navbar from '../components/navbar';
import Products from '../components/products'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

export default class Home extends Component {
     constructor(props) {
        super(props)

        this.state = {
            isSticky: false
        }

        this.scrollToggle = this.scrollToggle.bind(this)
    }

scrollToggle() {
  // the two variables allow for different window sizes,
  // so the animation will happen at the same place no matter
  // the view size of the screen.
 const pageHeight = window.innerHeight;
 const animate = pageHeight * .89999;
      if( window.pageYOffset > `${animate}`) {
        this.setState( { isSticky: true } )
      } else {
        this.setState( { isSticky: false } )
      }

  }
    render() {

     window.onscroll = this.scrollToggle   
    
        return (
           <div className="landing-page-container">
            <Navbar
              path={this.props.location.pathname}
              logo={logo}
              stick={this.state.isSticky} />
            <Carousel />
             <Link to='/'><img className={ (this.state.isSticky) ? "sticky-logo" : "logo-container"} src={logo} alt="" /></Link>
            <Products />
             <img className="badge" src={badge} alt="badge" />
            <Footer />
          </div>
        )
    }
}
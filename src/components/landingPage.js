import React, {Component} from 'react'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg'
import '../styles/landingPage.scss'

import Carousel from '../components/carousel';
import Navbar from '../components/navbar';
import Products from '../components/products'

export default class Home extends Component {
     constructor(props) {
        super(props)

        this.state = {
            isSticky: false
        }

        this.scrollToggle = this.scrollToggle.bind(this)
    }

scrollToggle() {
      if( window.pageYOffset > 606 ) {
        this.setState( { isSticky: true } )
      } else {
        this.setState( { isSticky: false } )
      }

  }
    render() {
      
     window.onscroll = this.scrollToggle   
    
        return <div className="landing-page-container">
            <Navbar
              stick={this.state.isSticky}
            />
            <Carousel />
            <img className={ (this.state.isSticky) ? "sticky-logo" : "logo-container"} src={logo} alt="" />
            <Products />
            <img className="badge" src={badge} alt="badge" />
          </div>;
    }
}
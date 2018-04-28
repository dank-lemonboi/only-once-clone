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
      if( window.pageYOffset > 100 ) {
        this.setState({ sticky: true })
      } else {
        this.setState({ sticky: false })
      }

  }
    render() {
     
      window.onscroll = this.scrollToggle
        
        return <div className="landing-page-container">
            <Navbar />
            <Carousel />
              <img className={ (!this.state.isSticky) ? "logo-container" : "sticky-logo" } src={logo} alt="" />
            <Products />
            <img className="badge" src={badge} alt="badge" />
          </div>;
    }
}
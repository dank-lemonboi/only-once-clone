import React, {Component} from 'react'
import logo from "../assets/images/only_once_logo.svg";
import badge from '../assets/images/only_once_badge.svg'
import '../styles/landingPage.scss'
import Carousel from '../components/carousel';
import Navbar from '../components/navbar';
import Products from '../components/products'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

import { getAll, addToCart } from "../ducks/reducer";


class Home extends Component {
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
 let pageHeight = window.innerHeight;
 let animate = pageHeight * .89999;

      if( window.pageYOffset >= `${animate}`) {
        this.setState( { isSticky: true } )
      } else {
        this.setState( { isSticky: false } )
      }

  }

  componentDidMount() {
    this.props.getAll();
    window.scrollTo(0, 0)
    // axios.get('/api/auth/me').then( res => {
    //     console.log(res.data)
    // }).catch( () => console.log('woops, something in not working...') )

  }


    render() {

     window.onscroll = this.scrollToggle   
    
        return (
          <div className="landing-page-container">
            <Navbar 
            path={this.props.location.pathname} 
            logo={logo} 
            stick={this.state.isSticky} 
            cart={this.props.cart}
            width={window.innerWidth}
            />
            <Carousel />
            <Link to="/">
              <img className={ ( ( this.props.path === '/' || !this.state.isSticky ) ) ? "logo-container"  : ( this.props.path !== '/' ) ? "sticky-logo" : 'logo-container' } src={logo} alt="" />
            </Link>
             <Products />
            <img className="badge" src={badge} alt="badge" />
          </div>
        )
    }
}

let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect( mapStateToProps, { getAll, addToCart } )(Home)
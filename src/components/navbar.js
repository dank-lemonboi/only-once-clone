import React, { Component } from 'react'
import '../styles/navbar.scss'
import facebook from '../assets/images/facebook_logo.svg'
import instagram from '../assets/images/instagram_logo.svg'
import pinterest from '../assets/images/pinterest_logo.svg'
import down from '../assets/arrow-down.svg'
import up from '../assets/arrow-up.svg'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
          classToggle: false,
          mobileToggle: false,
          scrollToggle: false,
          dropMenu: false,
          cart: [1,2,3,4,5,6,7,8]
        }

        this.widthToggle = this.widthToggle.bind(this)
        this.navMenuClick = this.navMenuClick.bind(this)
        this.scrollListen = this.scrollListen.bind(this)

    }

    navMenuClick() {
      this.setState({
        mobileToggle: !this.state.mobileToggle
      })
    }

    scrollListen() {
      if( window.pageYOffset > 600 ) {
        this.setState( { scrollToggle: true } )
      } else {
        this.setState( { scrollToggle: false } )
      }

  }

    widthToggle() {
      if (window.innerWidth <= 768 ) {
        this.setState({ classToggle: true });
      } else {
        this.setState({ classToggle: false });
      }
    }

    componentDidMount() {
        this.widthToggle() 
          window.addEventListener('resize', this.widthToggle.bind(this))
            
          
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.widthToggle.bind(this))
    }
      
    
    render() { 


        return <header className="nav-parent">
            <nav className={ ( this.props.path !== '/' || this.props.stick ) ? "scroll-adjust" : "nav-sticky"}>
              <div className="nav-left">
              {/* Ternary which uses state to render a mobile responsive pleasant User navbar experience */}
                {

                  ( !this.state.classToggle )

                ? 

                 <ul className="nav-menu">
                    <li className="nav-menu-store">
                      <span className='store-wrapper'>STORE { (!this.state.dropMenu) ? <img src={down} alt=""/> : <img src={up} alt=""/> }</span> 
                      <ul className="drop-menu-store">
                        <li>LAMPS & LIGHTS</li>
                        <li>INDUSTRIAL</li>
                        <li>SOLD</li>
                        <li>ELECTRONIC GOODS</li>
                        <li>CLOCKS</li>
                        <li>HOME DECO</li>
                      </ul>
                    </li>
                    <li className="nav-menu-info">
                      <span className='info-wrapper'>INFORMATION { (!this.state.dropMenu) ? <img src={down} alt=""/> : <img src={up} alt=""/> }</span>
                      <ul className="drop-menu-info">
                        <li>BLOG</li>
                        <li>ABOUT</li>
                        <li>ORDERING</li>
                        <li>CONTACT</li>
                      </ul>
                    </li>
                  </ul> 

                : 

                <div className="nav-mobile">
                    <span onClick={() => this.navMenuClick()} className="drop-menu-mobile">
                      Menu
                    </span>
                    <ul className={!this.state.mobileToggle ? "mobile-nav-menu" : "mobile-nav-menu reveal"}>
                      <span>Store</span>
                      <ul className="mobile-store-list">
                        <li>LAMPS & LIGHTS</li>
                        <li>INDUSTRIAL</li>
                        <li>SOLD</li>
                        <li>ELECTRONIC GOODS</li>
                        <li>CLOCKS</li>
                        <li>HOME DECO</li>
                      </ul>
                      <span>Information</span>
                      <ul children="mobile-info-list">
                        <li>BLOG</li>
                        <li>ABOUT</li>
                        <li>ORDERING</li>
                        <li>CONTACT</li>
                      </ul>
                    </ul>
                  </div>

                }

              </div>
            </nav>

            {/* This will dynamically render the logo into the nav-bar if the route is anywhere other than the main landing page, 
              which will act as a bread-crumb feature to link users back to the landing page from anywhere in the site */}

            <span> { (this.props.path !== '/') ? <Link to='/'> <img className='sticky-logo' src={this.props.logo} alt=""/> </Link>: null } </span>
            <div className="right-nav-social">
              <Link to ='/cart/:userId'><div className='nav-cart'>{ ( this.state.cart.length > 0 ) ?  `CART (${this.state.cart.length})`: null }</div></Link>
              <a href="https://www.pinterest.com/onlyonceshop/">
                <img className="social-tag-p" src={pinterest} alt="pinterest logo link" />
              </a>
              <a href="https://www.facebook.com/onlyoncestore/">
                <img className="social-tag-f" src={facebook} alt="facebook logo link" />
              </a>
              <a href="https://www.instagram.com/onlyonceshop/">
                <img className="social-tag-i" src={instagram} alt="instagram logo link" />
              </a>
            </div>
          </header>;
    }
}
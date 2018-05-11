import React, { Component } from 'react'
import '../styles/navbar.scss'
import facebook from '../assets/images/facebook_logo.svg'
import instagram from '../assets/images/instagram_logo.svg'
import pinterest from '../assets/images/pinterest_logo.svg'
import down from '../assets/arrow-black.svg'
import up from '../assets/arrow-red.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
          classToggle: false,
          mobileToggle: false,
          scrollToggle: false,
          dropMenu: false,
          dropInfo: false,
          cart: []
        }

        this.widthToggle = this.widthToggle.bind(this)
        this.navMenuClick = this.navMenuClick.bind(this)
        this.scrollListen = this.scrollListen.bind(this)
    }

    componentDidUpdate(prevProps) {
      if( prevProps !== this.props  ) {
        this.setState({
          cart: this.props.cart
        })
        console.log(this.props.cart)
      }
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
          window.addEventListener( 'resize', this.widthToggle.bind(this) )
          
          this.setState({
            cart: this.props.cart
          })
    }

    componentWillUnmount() {
      window.removeEventListener( 'resize', this.widthToggle.bind(this) )
    }
      
    
    render() { 
      // console.log(this.props.width)
        return (
          <header className="nav-parent">
            <nav className={ ( this.props.path !== '/' || this.props.stick || this.props.width < 568 ) ? "scroll-adjust" : "nav-sticky"}>
              <div className="nav-left">
                {/* Ternary which uses state to render a mobile responsive pleasant User navbar experience */}
                { 
                  ( !this.state.classToggle )

                  ? 
                  
                  <ul className="nav-menu">
                    <li className="nav-menu-store">
                      <span 
                      // How do I get the nav to conditionally drop on hover, allow me to navigate the 
                      // drop menu and have it disapear when i'm no-longer hovering?
                        onMouseOver={ () => this.setState( { dropMenu: true } )}
                        onMouseOut={ () => this.setState({ dropMenu: false } )}
                        className={ ( this.state.dropMenu ) ? 'store-wrapper red' : 'store-wrapper' }>
                        STORE { ( !this.state.dropMenu ) ? <div className='drop-arrow'><img src={down} alt=""/></div> : <div className='drop-arrow rotate'><img src={up} alt=""/></div> }
                      </span>
                      <ul 
                        onMouseOver={ () => this.setState( { dropMenu: true } )} 
                        onMouseOut= {() => this.setState({ dropMenu: false } )}
                        className={ ( !this.state.dropMenu ) ? "drop-menu-store" : "drop-menu-store reveal"}>
                        <li>LAMPS & LIGHTS</li>
                        <li>INDUSTRIAL</li>
                        <li>SOLD</li>
                        <li>ELECTRONIC GOODS</li>
                        <li>CLOCKS</li>
                        <li>HOME DECO</li>
                      </ul>
                    </li>
                    <li className="nav-menu-info"
                        onMouseOver={ () => this.setState({ dropInfo: true })}
                        onMouseOut= { () => this.setState({ dropInfo: false } )}>                       
                        
                      <span
                        className={ (this.state.dropInfo) ? "info-wrapper red" : "info-wrapper" }>
                        INFORMATION { ( !this.state.dropInfo ) ? <div className='drop-arrow'><img src={down} alt=""/></div> : <div className='drop-arrow rotate'><img src={up} alt=""/></div> }
                      </span>
                      <ul 
                        onMouseOver={ () => this.setState({ dropInfo: true })} 
                        onMouseOut= {() => this.setState({ dropInfo: false } )}                        
                        className={ ( !this.state.dropInfo ) ? "drop-menu-info" : "drop-menu-info reveal"}>
                        <li>BLOG</li>
                        <li>ABOUT</li>
                        <li>ORDERING</li>
                        <li>CONTACT</li>
                      </ul>
                    </li>
                  </ul> 
                  
                  : 
                  
                  <div className="nav-mobile">
                    <span onClick={ () => this.navMenuClick() } className="drop-menu-mobile">
                      Menu
                    </span>
                    <ul className={ ( !this.state.mobileToggle ) ? "mobile-nav-menu" : "mobile-nav-menu mob-reveal" }>
                      <span id='store-title' className='title'>Store</span>
                      <ul className="mobile-store-list">
                        <li>LAMPS & LIGHTS</li>
                        <li>INDUSTRIAL</li>
                        <li>SOLD</li>
                        <li>ELECTRONIC GOODS</li>
                        <li>CLOCKS</li>
                        <li>HOME DECO</li>
                      </ul>
                      <span className='title'>Information</span>
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

            <span> { ( this.props.path !== "/" ) ? <Link to="/"><img className="sticky-logo" src={ this.props.logo } alt="" /></Link> : null }</span>
            <div className="right-nav-social"> 
              <Link to="/cart/:userId">
              {/* Conditionally render a cart if your cart contains items, and then change the size and placement based on window size */}
                <div 
                className={ ( window.innerWidth < 568 ) ? "nav-cart-mob" : window.innerWidth < 768 ? "nav-cart-tab" : "nav-cart"  } >
                  { ( window.innerWidth < 568 && this.state.cart.length > 0 )  ? `(${this.state.cart.length})` : this.state.cart.length > 0 ? `CART (${this.state.cart.length})` : null }
                </div>
              </Link>
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
          </header>
            )
    }
}

const mapStateToProps = (state) => {
  if(!state) {
    return {}
  }
  return {
    cart: state.customerReducer.cart
  }
}

export default connect(mapStateToProps)(Navbar)
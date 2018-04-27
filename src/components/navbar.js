import React, { Component } from 'react'



import '../styles/navbar.scss'

import facebook from '../assets/images/facebook_logo.svg'
import instagram from '../assets/images/instagram_logo.svg'
import pinterest from '../assets/images/pinterest_logo.svg'

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
          classToggle: false,
          mobileToggle: false,
          scrollToggle: false
        }

        this.widthToggle = this.widthToggle.bind(this)
        this.navMenuClick = this.navMenuClick.bind(this)

    }

    navMenuClick() {
      this.setState({
        mobileToggle: !this.state.mobileToggle
      })
    }

    window = () => {
      if(this.scrollY >= 710) {
        this.setState({
          scrollToggle: true
        })
      }

  }

    widthToggle() {
      if (window.innerWidth <= 768) {
        this.setState({ classToggle: true });
      } else {
        this.setState({ classToggle: false });
      }
    }

    componentDidMount() {
        this.widthToggle() 
          window.addEventListener('resize', this.widthToggle.bind(this))
            
          
          // window.addEventListener('stick', this.scrollListener.bind(this))
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.widthToggle.bind(this))
      // window.removeEventListener('stick', this.scrollListener.bind(this))
    }

      
    
    render() {
        return <header className="nav-parent">
            <nav className={(!this.state.scrollToggle) ? "nav-sticky" : "scroll-adjust"}>
              <div className="nav-left">

              { (!this.state.classToggle)

                ?

                <ul className="nav-menu">
                  <li className="nav-menu-store">
                    STORE
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
                    INFORMATION
                    <ul className="drop-menu-info">
                      <li>BLOG</li>
                      <li>ABOUT</li>
                      <li>ORDERING</li>
                      <li>CONTACT</li>
                    </ul>
                  </li>
                </ul>

                :

                <div className='nav-mobile'>
                  <span onClick={ () => this.navMenuClick() } className='drop-menu-mobile'>Menu</span>
                   <ul className={ (!this.state.mobileToggle) ? "mobile-nav-menu" : "mobile-nav-menu reveal" }>
                    <span>Store</span>
                    <ul className='mobile-store-list'>
                      <li>LAMPS & LIGHTS</li>
                      <li>INDUSTRIAL</li>
                      <li>SOLD</li>
                      <li>ELECTRONIC GOODS</li>
                      <li>CLOCKS</li>
                      <li>HOME DECO</li>
                    </ul>
                    <span>Information</span>
                    <ul children='mobile-info-list'>
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
            <div className="center-logo"></div>
            <div className="right-nav-social">
              <img className="social-tag-p" src={pinterest} alt="pinterest logo link" />
              <img className="social-tag-f" src={facebook} alt="facebook logo link" />
              <img className="social-tag-i" src={instagram} alt="instagram logo link" />
            </div>
          </header>;
    }
}
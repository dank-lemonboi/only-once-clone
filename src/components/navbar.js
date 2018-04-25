import React, { Component } from 'react'
import '../styles/navbar.scss'

import facebook from '../assets/images/facebook_logo.svg'
import instagram from '../assets/images/instagram_logo.svg'
import pinterest from '../assets/images/pinterest_logo.svg'

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return(
            <header className='nav-sticky'>
                <nav>
                    <div className='left-nav-dropdown'></div>
                    <div className='center-logo'></div>
                    <div className='right-nav-social'>
                        <img className='social-tag' src={pinterest} alt="pinterest logo link"/>
                        <img className='social-tag' src={facebook} alt="facebook logo link"/>
                        <img className='social-tag' src={instagram} alt="instagram logo link"/>
                    </div>
                </nav>
            </header>
        )
    }
}
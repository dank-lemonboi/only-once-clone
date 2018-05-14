import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { getUsername, getPinput } from '../../ducks/adminReducer'
import { modalEngaged, adminMode } from '../../ducks/reducer'
import './admin-style/auth.scss'
import logo from '../../assets/images/only_once_logo.svg'
import badge from '../../assets/images/only_once_badge.svg'

class AdminAuth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errMsg: ''
        }

        this.registerAdmin = this.registerAdmin.bind(this)
        this.loginAdmin = this.loginAdmin.bind(this)
    }

    registerAdmin() {
        axios.post('/api/auth/register', { username: this.props.username, pinput: this.props.pinput }).then(res => { 
        }).catch( () => alert("Get your own username! The REAL admin already chose that username. Hacker.") )
    }

    loginAdmin() {
        // attempting to get the form to submit when you press enter
        // if( key.keyValue === 13 ) {
    //     axios.post('/api/auth/login', { username: this.props.username, pinput: this.props.pinput }).then( res => {
    //         window.location = '/#/dashboard'
    //         this.props.adminMode(true)
    //     }).catch()
    //   } 
      axios.post('/api/auth/login', { username: this.props.username, pinput: this.props.pinput }).then( res => {
            window.location = '/#/dashboard'
            this.props.adminMode(true)
        }).catch( ( res, err ) => {
            console.log(res)
            if(res.status === 401 ) {
                this.setState({
                    errMsg: 'Wrong Password. Please Try again.'
                })
            } else if ( res.status === 404 ) {
                this.setState({
                    errMsg: 'You must not be an Admin... Nice Try sucka.'
                })
            } else if (res.status === 500 ) {
                this.setState({
                    errMsg: 'You must create credentials and receive permissions from a current admin to login.'
                })
            }

        }
        )
    }

    render() {
        console.log(this.props)
        return (
            <div className='auth-parent'>
                <div className='auth-wrapper'>
                    <span><img src={logo} alt=""/></span>
                    <span className='err-msg'>{this.state.errMsg}</span>
                <div className='input-wrapper'>
                    <div className='auth-inputs'>
                        <span>Username</span>
                        <input 
                            type='text'
                            onChange={ (e) => this.props.getUsername(e.target.value) }
                        />
                    </div>
                    <div className='auth-inputs'>
                        <span>Password</span>
                        <input 
                            type='password'
                            onChange={ (e) => this.props.getPinput(e.target.value) }
                        />
                    </div>
                </div>
                <section className='button-wrapper'>
                    <div
                        className='auth-btn'
                        onClick={ () => this.registerAdmin() }
                        >
                        Register
                     </div>
                    <div
                        className='auth-btn'
                        onClick={ () => this.loginAdmin() }
                        // onKeyUp={ this.loginAdmin({ keyValue: 13 }) }
                        >
                        Login
                     </div> 
                </section>
                </div>
                <img className="badge" src={badge} alt="badge" />
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    // const { username, password } = state.adminReducer

    return {
        username: state.adminReducer.username,
        pinput: state.adminReducer.pinput,
        isAdmin: state.customerReducer.isAdmin
    }
}

export default connect(mapStateToProps, { getUsername, getPinput, modalEngaged, adminMode } )( AdminAuth )
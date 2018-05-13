import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { getUsername, getPinput } from '../../ducks/adminReducer'
import { modalEngaged, adminMode } from '../../ducks/reducer'
import './admin-style/auth.scss'

class AdminAuth extends Component {
    constructor(props) {
        super(props)

        this.registerAdmin = this.registerAdmin.bind(this)
        this.loginAdmin = this.loginAdmin.bind(this)
    }

    registerAdmin() {
        axios.post('/api/auth/register', { username: this.props.username, pinput: this.props.pinput }).then(res => { 
            
            
        }).catch( () => alert("Get your own username! The REAL admin already chose that one. Hacker.") )
    }

    loginAdmin() {
        axios.post('/api/auth/login', { username: this.props.username, pinput: this.props.pinput }).then( res => {
            window.location = '/#/dashboard'
            this.props.adminMode(true)
        }).catch()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <div>
                    <span>Admin Login</span>
                    <div>
                        <span>Username</span>
                        <input 
                            type='text'
                            onChange={ (e) => this.props.getUsername(e.target.value) }
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <input 
                            type='password'
                            onChange={ (e) => this.props.getPinput(e.target.value) }
                        />
                    </div>
                    <div
                        className='auth-btn'
                        onClick={ () => this.registerAdmin()}
                        >
                        Register
                     </div>
                    <div
                        className='auth-btn'
                        onClick={ () => this.loginAdmin() }
                        >
                        Login
                     </div>
                </div>
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
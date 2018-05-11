import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { getUsername, getPassword } from '../../ducks/adminReducer'
import { modalEngaged, adminMode } from '../../ducks/reducer'
import './admin-style/auth.scss'

class AdminAuth extends Component {
    constructor(props) {
        super(props)

        this.registerAdmin = this.registerAdmin.bind(this)
        this.loginAdmin = this.loginAdmin.bind(this)
    }

    registerAdmin() {
        axios.post('/api/auth/register', { username: this.props.username, password: this.props.password }).then(res => {
            this.props.adminMode(true)
           window.setTimeout(() => {
               this.props.modalEngaged(false)
           }, 5000);
            
                
            
        }).catch( () => alert("Get your own username! The REAL admin already chose that one. Hacker.") )
    }

    loginAdmin() {
        axios.post('/api/auth/login', { username: this.props.username, password: this.props.password }).then( res => {
            this.props.adminMode(true)
             window.setTimeout( () => {
                 this.props.modalEngaged(false)
             }, 5000)    
        }).catch( () => alert('Your credentials are not correct... try again.') )
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
                            onChange={ (e) => this.props.getPassword(e.target.value) }
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
        password: state.adminReducer.password,
        modalView: state.customerReducer.modalView,
        isAdmin: state.customerReducer.isAdmin
    }
}

export default connect(mapStateToProps, { getUsername, getPassword, modalEngaged, adminMode } )( AdminAuth )
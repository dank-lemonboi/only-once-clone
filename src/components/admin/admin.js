import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getAll } from '../../ducks/reducer'
import axios from 'axios'
import Navbar from '../navbar'
import { getItemNumber, clearInput }  from '../../ducks/adminReducer'
import './admin-style/auth.scss'

class Admin extends Component {
    constructor() {
    super()
    
    // this.authMe = this.authMe.bind(this)
}

    componentDidMount() {
        axios.get('/api/auth/me').then(res => {
            console.log(res.data)
            if (res.data === 'go home') {
                this.props.history.push('/admin')
            }

        }).catch()
    }

    handleClick() {
        axios.post(`/api/deleteProduct?itemNumber=${this.props.itemNumber}`).then( res => {
            alert(`item ${this.props.itemNumber} was deleted.`)
        }, this.props.clearInput() ).catch()
    }

    render() {

        () => this.authMe()

        return (
            <div className='admin-parent'>
                <Navbar />
                <div className='admin-wrapper'>
                <div>Yo! This is the admin view! Here we'll add more products, and delete ones we don't want anymore.</div>
                    <span>Delete Items from database</span>
                    <input 
                        placeholder='Item Number'
                        onChange={ (e) => this.props.getItemNumber(e.target.value) }
                    />
                    <div className='auth-btn' onClick={ () => this.handleClick() }>Delete Item Selection</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemNumber: state.adminReducer.itemNumber
    }
}

export default connect(mapStateToProps, { getItemNumber, clearInput })(Admin)
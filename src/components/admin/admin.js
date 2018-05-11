import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getAll } from '../../ducks/reducer'
import axios from 'axios'
import Navbar from '../navbar'
import {getItemNumber}  from '../../ducks/adminReducer'
import './admin-style/auth.scss'

class Admin extends Component {

    componentDidMount() {
        axios.get('/api/me').then( res => {
            if ( res.data === 'stay') {
                console.log('We made it to an admin position!')
            }
               
            
        }).catch( (err) => this.props.history.push('/adminLogin') )
    }

    handleClick() {
        axios.post(`/api/deleteProduct?itemNumber=${this.props.itemNumber}`).then( res => {
            console.log(`item ${this.props.itemNumber} was deleted.`)
        }).catch()
    }

    render() {
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

export default connect(mapStateToProps, { getItemNumber })(Admin)
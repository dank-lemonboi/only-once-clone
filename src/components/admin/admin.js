import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getAll } from '../../ducks/reducer'
import axios from 'axios'
import Navbar from '../navbar'
import { getItemNumber, clearInput }  from '../../ducks/adminReducer'
import './admin-style/admin.scss'
import ProductTag from './adminProductList'

class Admin extends Component {
    constructor() {
    super()
    
}

    componentDidMount() {
        if(this.props.isAdmin === false) {
            this.props.history.push('/admin')
        } else {
        axios.get('/api/auth/me').then(res => {
            
            console.log(res.data)
            if (res.data === 'go home') {
                this.props.history.push('/admin')
            }

        }).catch()
      }
    }

    handleClick() {
        axios.post(`/api/deletePhotos?itemNumber=${this.props.itemNumber}`).then( () => {
            axios.post(`/api/deleteItem?itemNumber=${this.props.itemNumber}`).then( () => {
                alert(`item's ${this.props.itemNumber} were deleted.`)
            }).catch()
            this.props.clearInput()
        }).catch()
    }

    render() {
        console.log(this.props.itemNumber)        
        // () => this.authMe()

        return (
            <div className='admin-parent'>
                <Navbar />
                <div className='input-container'> 
                <div className='admin-input-wrapper'>
                    <input 
                        value={this.props.itemNumber}
                        placeholder='Item number to delete'
                        onChange={ (e) => this.props.getItemNumber(e.target.value) }/>
                    <div className='admin-btn' onClick={ () => this.handleClick() }>Delete</div>
                </div>
                </div>

                <div className='database-table'>
                    <div className='db-table-header'>
                        <ul className='table-header-wrapper'>
                            <li className='card-name'>Item name</li>
                            <li className='card-info'>Item Type</li>
                            <li className='card-info'>Item Number</li>
                            <li className='card-info'>Retail Value</li>
                            <li className='card-info'>Sold?</li>
                        </ul>
                    </div>
                    <ProductTag />
                    <div className='db-bottom'></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemNumber: state.adminReducer.itemNumber,
        isAdmin: state.customerReducer.isAdmin,
        products: state.customerReducer.products
    }
}

export default connect(mapStateToProps, { getItemNumber, clearInput })(Admin)
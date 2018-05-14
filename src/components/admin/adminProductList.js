import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAll} from '../../ducks/reducer'
import './admin-style/dbInfo.scss'
import axios from 'axios'

class ProductTag extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.props.getAll()
        }
    }

    handleClick( id, value ) {
        if( value === true ) {
            axios.post('/api/sold', {id: id, value: false}).then( res => {
                this.props.getAll()
            })
        } else if (value === false) {
            axios.post('/api/sold', { id: id, value: true }).then( res => {
                this.props.getAll()
        })
    }
}

    render() {
        const { products } = this.props
        let dataBaseInfo = products.map( (product) => {
            return (
                <div className='database-card-parent'>
                    <div className='db-card-wrapper' key={product.item_id}>
                        <div className='db-name'>{product.item_name}</div>
                        <div className='db-info'>{product.item_type}</div>
                        <div className='db-info'>{product.item_number}</div>
                        <div className='db-info'>$: {product.price}</div>
                        <div onClick={ () => this.handleClick( product.item_id, product.sold ) } className='db-info' id='sold'>{( product.sold ) ? "Sold" : "Available" }</div>
                    </div>
                        <div className='card-line'></div>
                </div>
            )
        }) 
        return(
            <div>
                {dataBaseInfo}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.customerReducer.products
    }
}

export default connect(mapStateToProps, {getAll} )(ProductTag)

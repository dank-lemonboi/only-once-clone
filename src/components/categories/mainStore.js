import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductList from '../productList'
import ProductTile from '../productTile'
import Navbar from '../navbar'
import Footer from '../footer'
import logo from '../../assets/images/only_once_logo.svg'
import { getAll } from '../../ducks/reducer'
import '../../styles/store.scss'

 class Store extends Component {
     constructor(props) {
         super(props)

         this.state = {}
     }

componentDidMount() {
    this.props.getAll()
}

    render() {
        return(
            <div className='store-parent'>
                <Navbar
                    path={this.props.location.pathname}
                    logo={logo}
                    stick={this.props.isSticky}
                    cart={this.props.cart}
                    width={window.innerWidth}/>
                <div><span>{ (window.location.hash !== '#/store') ? `${this.props.match.params} View` : 'Whole Selection' }</span></div>
                <ProductList 
                 location={this.props.match}
                 className='store-view'/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.customerReducer.products,
        cart: state.customerReducer.cart,
        isSticky: state.customerReducer.isSticky
    }
}

export default connect(mapStateToProps, { getAll })(Store)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAll} from '../ducks/reducer'
import axios from 'axios'
import 

class Admin extends Component {

componentDidMount() {
    this.props.getAll()
}

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { getAll })(Admin)
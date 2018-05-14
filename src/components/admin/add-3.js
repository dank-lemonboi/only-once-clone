import React, { Component } from 'react'
import { connect } from 'react-redux'
import './admin-style/add-3.scss'

class AddExtra extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(AddExtra)
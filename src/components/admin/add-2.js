import React, { Component } from 'react'
import { connect } from 'react-redux'
import './admin-style/add-2.scss'

class AddPhoto extends Component {
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

export default connect(mapStateToProps)(AddPhoto)
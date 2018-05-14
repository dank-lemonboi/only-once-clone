import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../styles/emailCard.scss'

class EmailCard extends Component {
    constructor(props) {
        super(props)

        this.state = {}

    }

    render() {
        return (
            <div className='email-parent'>
                <div className='email-left-wrapper'>
                    <div className='email-dot'></div><p> Sign up and be the first to find out about new vintage products and the latest stories.</p>
                    
                </div>
                 <div className='email-right-wrapper'>
                    <div className='email-input-wrapper'>
                    <div className='input-sub-wrapper'>
                        <input 
                            className='email-input'
                            placeholder='Your Email Address*'
                        />
                        <span className='little-disclaimer'>* We Promise we won't spam</span>
                    </div>
                        <div className='send-btn'>Send</div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
 return {
     state
 }
}

export default connect(mapStateToProps, {})(EmailCard)
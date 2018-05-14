import React, { Component } from 'react'
import {connect} from 'react-redux'
import './admin-style/add-1.scss'
import { getItemName, getItemDescription } from '../../ducks/adminReducer'

class AddInfo  extends Component {
    render(){
        return(
            <div className='info-parent'>
                <div className='info-wrapper'>
                    <div className='item-input-wrapper'>
                        <span>Item Name</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Item Description</span>
                        <input 
                            oncChange=''
                        />
                    </div>

                    <div className='item-input-wrapper'>
                        <span>Item Type</span>
                        <input 
                            oncChange=''
                        />
                    </div>

                    <div className='item-input-wrapper'>
                        <span>Photo URL</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Length</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Width</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Height</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Weight</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Item Number</span>
                        <input 
                            oncChange=''
                        />
                    </div>
                    <div className='item-input-wrapper'>
                        <span>Price</span>
                        <input 
                            oncChange=''
                        />
                    </div>

                    <div className='admin-btn-wrapper'>
                        <div className='next-button'>Next</div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        itemName: state.adminReducer.itemName,
        itemDescription: state.adminReducer.itemDescription
    }
}

export default connect(mapStateToProps, { getItemName, getItemDescription } )(AddInfo)
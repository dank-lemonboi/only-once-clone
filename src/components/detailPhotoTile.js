import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../styles/detailPhotos.scss'

class DetailPhoto extends Component {
    constructor(props) {
    super(props)

    }
    
    render() {
        const { picture } = this.props
        
        let photoTile = picture.map( (photo, i) => {
            return (
                <div className='photo-parent' key={photo.photo_id}>
                    <div className='photo-wrapper'>
                        <img src={photo.detail_photo} alt="" />
                    </div>
                </div>
            )
        })

        
        console.log(this.props)
        return (
            <div className='tile-wrapper'>
               {photoTile}
            </div>
        )
    }
    
}

    let mapStateToProps = (state) => {
    return {
        // detailPhotos: state.customerReducer.detailPhotos
    }
}

export default connect(mapStateToProps)(DetailPhoto)
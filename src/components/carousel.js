import React, { Component } from 'react'
import { imgUrls } from '../assets/images/carousel-images'
// import { clearInterval } from 'timers';

import '../styles/carousel.scss'


const ImageSlide = ({ url, url2, text }) => {
    return (
        <div className='image-slide' >
          <img className='img-carousel' src={url} alt=''/>
          <img className='img-carousel2' src={url2} alt=''/>
          <div className='txt-carousel'>{text}</div>
        </div>
    )
}

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            nextImageIndex: 1
        }

        this.nextSlide = this.nextSlide.bind(this)
    }

    // Clear interval in case you want to stop the interval in the future.
    componentDidMount() {
        setInterval( () => this.nextSlide(), 7000)
    }

    componentWillUnmount() {
        clearInterval()
    }

    nextSlide() {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex, nextImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const shouldResetIndex2 = nextImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        const index2 = shouldResetIndex2 ? 0 : nextImageIndex + 1;

        this.setState({
            currentImageIndex: index,
            nextImageIndex: index2
        });
    }

    render() {
        console.log(imgUrls)
        return(
            
            <div className='image-carousel'>
                <ImageSlide
                  url2={ imgUrls[this.state.nextImageIndex].url }
                  url={ imgUrls[this.state.currentImageIndex].url }
                  text={ imgUrls[this.state.currentImageIndex].text }
                />
            </div>
        );
    }
}
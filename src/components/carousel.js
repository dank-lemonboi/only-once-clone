import React, { Component } from 'react'
import { imgUrls } from '../assets/images/carousel-images'
// import { clearInterval } from 'timers';

import '../styles/carousel.scss'


const ImageSlide = ({ url, text }) => {
    return <div className="image-slide">
        <img className='img-frame' src={url} alt="" />
        <div className="txt-carousel">{text}</div>
      </div>
}

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            nextImageIndex: 1
        }

        // this.nextSlide = this.nextSlide.bind(this)
    }


    // *** I left this code commented out, because I felt like it was a good way to keep track of an arrays
    // *** Index and to reset it at a certain point. It's completely unnceccesary code.
    // Clear interval in case you want to stop the interval in the future.
    // componentDidMount() {
    //     setInterval( () => this.nextSlide(), 7000)
    // }

    // componentWillUnmount() {
    //     clearInterval()
    // }

    // nextSlide() {
    //     const lastIndex = imgUrls.length -1;
    //     const { currentImageIndex, nextImageIndex } = this.state;
    //     const shouldResetIndex = currentImageIndex === lastIndex;
    //     const shouldResetIndex2 = nextImageIndex === lastIndex;
    //     const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    //     const index2 = shouldResetIndex2 ? 0 : nextImageIndex + 1;

    //     this.setState({
    //         currentImageIndex: index,
    //         nextImageIndex: index2
    //     });
    // }

    render() {
        return (
            <div className="image-carousel">
             <div id='animate-me'>
              <ImageSlide url={imgUrls[0].url} text={imgUrls[0].text} />
             </div>
             <div id='animate-me'>
              <ImageSlide url={imgUrls[1].url} text={imgUrls[1].text} />
             </div>
             <div id='animate-me'>
              <ImageSlide url={imgUrls[2].url} text={imgUrls[2].text} />
             </div>
             <div id='animate-me'>
              <ImageSlide url={imgUrls[3].url} text={imgUrls[3].text} />
             </div>
           </div>
      )
    }
}
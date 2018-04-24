import React, { Component } from 'react'
import { imgUrls } from '../assets/images/carousel-images'
// import { clearInterval } from 'timers';


const ImageSlide = ({ url }) => {
    console.log(url)
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'block',
        height: '91vh',
        maxWidth: '100%'
    }

    return (
        <div className='image-slide' style={styles}></div>
    )
}

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            // imgUrls: {}
        }

        this.nextSlide = this.nextSlide.bind(this)
    }

    // Clear interval in case you want to stop the interval in the future.
    componentDidMount() {
        setInterval( () => this.nextSlide(), 5000)
    }

    componentWillUnmount() {
        clearInterval()
    }

    nextSlide() {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 :currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return(
            
            <div className='img-carousel'>
            {
                (imgUrls)
                ?
                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
                :
                null
            }
            </div>
        );
    }
}
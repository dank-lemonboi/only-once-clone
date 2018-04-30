import React, { Component } from 'react'
import { imgUrls } from '../assets/images/carousel-images'
import { Link } from 'react-router-dom'


import '../styles/carousel.scss'



const ImageSlide = ({ url, text }) => {
    return (
      <div className="image-slide">
        <img className='img-frame' src={url} alt="" />
        <div className="txt-carousel">{text}</div>
      </div>
    )
}

export default class Carousel extends Component {
  constructor() {
    super()

    this.state = {
      carousel: 0
    }

    this.buttonRouter = this.buttonRouter.bind(this)
  }
   
    // *** I left this code commented out, because I felt like it was a good way to keep track of an arrays
    // *** Index and to reset it at a certain point. It's completely unnecesary code.
    // Clear interval in case you want to stop the interval in the future.
    componentDidMount() {
        setInterval( () => this.buttonRouter(), 7000)
    }

    componentWillUnmount() {
        clearInterval()
    }

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

    buttonRouter() {
      const arr = [0,1,2,3]
      let index = 0
      for(let i = 0; i < arr.length; i++) {
        
      }
    }


    // *** Change carousel animation to have the interval on state on the front end, and have classes being changed by state
    // On the CSS file make all the images 100% opacity by default, and then have the JS state on the front end
    // change the css class to animate the image into view, by changing the opacity to 0%. ***

    render() {

        return <div className="image-carousel">
            <div id="animate-me">
              <ImageSlide url={imgUrls[0].url} text={imgUrls[0].text} />
            </div>
            <div id="animate-me">
              <ImageSlide url={imgUrls[1].url} text={imgUrls[1].text} />
            </div>
            <div id="animate-me">
              <ImageSlide url={imgUrls[2].url} text={imgUrls[2].text} />
            </div>
            <div id="animate-me">
              <ImageSlide url={imgUrls[3].url} text={imgUrls[3].text} />
            </div>
            <Link key="IMAGE SLIDE BUTTON" to={imgUrls[`${this.state.carousel}`].route}>
              <div className="btn-discover">Discover Now.</div>
            </Link>
            <section className="carousel-bottom" />
          </div>;
    }
}
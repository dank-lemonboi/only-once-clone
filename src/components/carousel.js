import React, { Component } from 'react'
import { imgUrls } from '../assets/images/carousel-images'
import { Link } from 'react-router-dom'


import '../styles/carousel.scss'



const ImageSlide = ({ url, text }) => {
    return (
      <div className="image-slide">
        <img className="img-frame" src={url} alt="" />
        <div className="txt-carousel">{text}</div>
      </div>
    )
}



export default class Carousel extends Component {
  constructor() {
    super()

    this.state = {
      carousel: [0,1,2,3]
    }

    // this.buttonRouter = this.buttonRouter.bind(this)
  }
   
    // *** I left this code commented out, because I felt like it was a good way to keep track of an arrays
    // *** Index and to reset it at a certain point. It's completely unnecesary code.
    // Clear interval in case you want to stop the interval in the future.
    // componentDidMount() {
    //     setInterval( () => this.buttonRouter(), 7000)
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

    // buttonRouter() {
    //   const arr = [0,1,2,3]
    //   let index = 0
    //   for(let i = 0; i < arr.length; i++) {
        
    //   }
    // }


    // *** Change carousel animation to have the interval on state on the front end, and have classes being changed by state
    // On the CSS file make all the images 100% opacity by default, and then have the JS state on the front end
    // change the css class to animate the image into view, by changing the opacity to 0%. ***

    render() {

        return <div className="image-carousel">
            <div id="animate-me">
              <ImageSlide url='https://s3.ca-central-1.amazonaws.com/clone-once-photos/braun_radio.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAAlhoM5dcn%2FLjZKYIXS9bpJ2myGn3Weu%2F7nGxrZTulfaVN5497p4MvKI5eqUdTuA0AKx5BE7kl0RFnWMGy4m5S0Md77yhA2SYkZPM20W4NTFmap6piIdahGsVhkfRfBguFmkhAcLt1VcwoFeEirnTl6rO6l8kSbjJq88ZahXEguz5dVDPSBG7VYCOyQE9cet6qUjiRTl6NaN4jkiUvOe69aQJg1xZXQkugJnn%2BkpLiwFZNkcYHNngDC7IRDhlEd3UwoxQ9oMwwIp2UFJmp6oC6SiplDIxTamfUn43uprb0VioncR9EJLZVTOdMFIjvwCJaKxeeEF5Kc9Dt6epTtNSQakq2wMIaxAAGgw2ODU1MzY1NjI4OTYiDJgfWCNmRBr1nWZV7Cq4A3LMFaR%2FPVvJpPKYBpZ5TKK4GquYDYOYpDgwHoJjQYMhoKUHhQC82Lztc%2FQYplbKXrafdVATuZwEU7zUgOq8o5QEOqBhgKYeOgkU%2B6dDcbq22my5L1SEWSwtacDzL3lXiNxGe84%2BWWDgmIXNQUDGB0Xv64Ph%2FfCzjISmfAc9nDSNvoksq7GIlNUJjIMOsr%2Fu99S44LS0sE46m%2B14ZbyqwdzhVK94iFrZV6ZEVawzvxZTElTUUk1Zl0uMdKqpORI74XbQq%2Bb%2BmuzzW%2ByotlBuCpkM9P9xNmkag6c8JBzAZ8e6HMs4YQyiXMoWnLIIQIRShplRzc9l3%2FonSbXCE%2BXkDkjjZMCwYgYtiMVclEo87F9z12IRq5htvuZuYQ%2FBCywgQ7wJprUt0TvtS9ANBmdCPgH2xJciUtuIwh%2Flmamm5uEVL3CIRJrocbVtOa0cmOmfrx%2FZTQv4R9UoMIbBi2P%2BzOWFv%2F9qslGX%2FVbFjdyvG2Isgmyl4NoGmw1%2FFw3gob00GAs%2FZ3HIcwGaFhu4dJftavSf%2B57GrwxNIpBys%2B%2FsdG%2BjhNcFgn%2F2FMbiuJ9la8HSWnQ4XRYV10g4MN2Qh9kF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180614T021641Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAIDF6WP3YC7EWOQKA%2F20180614%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Signature=f747f495c78b7e2d069923b2b5289c8830b62e4f7d2773293d5b854fb0fba3f7' text={imgUrls[0].text} />
            </div>
            <div id="animate-me">
              <ImageSlide url='https://s3.ca-central-1.amazonaws.com/clone-once-photos/lamps.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAAlhoM5dcn%2FLjZKYIXS9bpJ2myGn3Weu%2F7nGxrZTulfaVN5497p4MvKI5eqUdTuA0AKx5BE7kl0RFnWMGy4m5S0Md77yhA2SYkZPM20W4NTFmap6piIdahGsVhkfRfBguFmkhAcLt1VcwoFeEirnTl6rO6l8kSbjJq88ZahXEguz5dVDPSBG7VYCOyQE9cet6qUjiRTl6NaN4jkiUvOe69aQJg1xZXQkugJnn%2BkpLiwFZNkcYHNngDC7IRDhlEd3UwoxQ9oMwwIp2UFJmp6oC6SiplDIxTamfUn43uprb0VioncR9EJLZVTOdMFIjvwCJaKxeeEF5Kc9Dt6epTtNSQakq2wMIaxAAGgw2ODU1MzY1NjI4OTYiDJgfWCNmRBr1nWZV7Cq4A3LMFaR%2FPVvJpPKYBpZ5TKK4GquYDYOYpDgwHoJjQYMhoKUHhQC82Lztc%2FQYplbKXrafdVATuZwEU7zUgOq8o5QEOqBhgKYeOgkU%2B6dDcbq22my5L1SEWSwtacDzL3lXiNxGe84%2BWWDgmIXNQUDGB0Xv64Ph%2FfCzjISmfAc9nDSNvoksq7GIlNUJjIMOsr%2Fu99S44LS0sE46m%2B14ZbyqwdzhVK94iFrZV6ZEVawzvxZTElTUUk1Zl0uMdKqpORI74XbQq%2Bb%2BmuzzW%2ByotlBuCpkM9P9xNmkag6c8JBzAZ8e6HMs4YQyiXMoWnLIIQIRShplRzc9l3%2FonSbXCE%2BXkDkjjZMCwYgYtiMVclEo87F9z12IRq5htvuZuYQ%2FBCywgQ7wJprUt0TvtS9ANBmdCPgH2xJciUtuIwh%2Flmamm5uEVL3CIRJrocbVtOa0cmOmfrx%2FZTQv4R9UoMIbBi2P%2BzOWFv%2F9qslGX%2FVbFjdyvG2Isgmyl4NoGmw1%2FFw3gob00GAs%2FZ3HIcwGaFhu4dJftavSf%2B57GrwxNIpBys%2B%2FsdG%2BjhNcFgn%2F2FMbiuJ9la8HSWnQ4XRYV10g4MN2Qh9kF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180614T021722Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAIDF6WP3YC7EWOQKA%2F20180614%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Signature=066d12b48f4c2a9646bc11317d4632620fcc66146d0f9d1558b6f0f307827bcf' text={imgUrls[1].text} />
            </div>
            <div id="animate-me">
              <ImageSlide url='https://s3.ca-central-1.amazonaws.com/clone-once-photos/only-once-siemens-fan.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAAlhoM5dcn%2FLjZKYIXS9bpJ2myGn3Weu%2F7nGxrZTulfaVN5497p4MvKI5eqUdTuA0AKx5BE7kl0RFnWMGy4m5S0Md77yhA2SYkZPM20W4NTFmap6piIdahGsVhkfRfBguFmkhAcLt1VcwoFeEirnTl6rO6l8kSbjJq88ZahXEguz5dVDPSBG7VYCOyQE9cet6qUjiRTl6NaN4jkiUvOe69aQJg1xZXQkugJnn%2BkpLiwFZNkcYHNngDC7IRDhlEd3UwoxQ9oMwwIp2UFJmp6oC6SiplDIxTamfUn43uprb0VioncR9EJLZVTOdMFIjvwCJaKxeeEF5Kc9Dt6epTtNSQakq2wMIaxAAGgw2ODU1MzY1NjI4OTYiDJgfWCNmRBr1nWZV7Cq4A3LMFaR%2FPVvJpPKYBpZ5TKK4GquYDYOYpDgwHoJjQYMhoKUHhQC82Lztc%2FQYplbKXrafdVATuZwEU7zUgOq8o5QEOqBhgKYeOgkU%2B6dDcbq22my5L1SEWSwtacDzL3lXiNxGe84%2BWWDgmIXNQUDGB0Xv64Ph%2FfCzjISmfAc9nDSNvoksq7GIlNUJjIMOsr%2Fu99S44LS0sE46m%2B14ZbyqwdzhVK94iFrZV6ZEVawzvxZTElTUUk1Zl0uMdKqpORI74XbQq%2Bb%2BmuzzW%2ByotlBuCpkM9P9xNmkag6c8JBzAZ8e6HMs4YQyiXMoWnLIIQIRShplRzc9l3%2FonSbXCE%2BXkDkjjZMCwYgYtiMVclEo87F9z12IRq5htvuZuYQ%2FBCywgQ7wJprUt0TvtS9ANBmdCPgH2xJciUtuIwh%2Flmamm5uEVL3CIRJrocbVtOa0cmOmfrx%2FZTQv4R9UoMIbBi2P%2BzOWFv%2F9qslGX%2FVbFjdyvG2Isgmyl4NoGmw1%2FFw3gob00GAs%2FZ3HIcwGaFhu4dJftavSf%2B57GrwxNIpBys%2B%2FsdG%2BjhNcFgn%2F2FMbiuJ9la8HSWnQ4XRYV10g4MN2Qh9kF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180614T021841Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAIDF6WP3YC7EWOQKA%2F20180614%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Signature=efce2bbf9d794cdc6d0388976f5d9f21b4f91193a48cc60f8e03d6a9ab1d06bf' text={imgUrls[2].text} />
            </div>
            <div id="animate-me">
              <ImageSlide url='https://s3.ca-central-1.amazonaws.com/clone-once-photos/oo_slider_clocks.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAAlhoM5dcn%2FLjZKYIXS9bpJ2myGn3Weu%2F7nGxrZTulfaVN5497p4MvKI5eqUdTuA0AKx5BE7kl0RFnWMGy4m5S0Md77yhA2SYkZPM20W4NTFmap6piIdahGsVhkfRfBguFmkhAcLt1VcwoFeEirnTl6rO6l8kSbjJq88ZahXEguz5dVDPSBG7VYCOyQE9cet6qUjiRTl6NaN4jkiUvOe69aQJg1xZXQkugJnn%2BkpLiwFZNkcYHNngDC7IRDhlEd3UwoxQ9oMwwIp2UFJmp6oC6SiplDIxTamfUn43uprb0VioncR9EJLZVTOdMFIjvwCJaKxeeEF5Kc9Dt6epTtNSQakq2wMIaxAAGgw2ODU1MzY1NjI4OTYiDJgfWCNmRBr1nWZV7Cq4A3LMFaR%2FPVvJpPKYBpZ5TKK4GquYDYOYpDgwHoJjQYMhoKUHhQC82Lztc%2FQYplbKXrafdVATuZwEU7zUgOq8o5QEOqBhgKYeOgkU%2B6dDcbq22my5L1SEWSwtacDzL3lXiNxGe84%2BWWDgmIXNQUDGB0Xv64Ph%2FfCzjISmfAc9nDSNvoksq7GIlNUJjIMOsr%2Fu99S44LS0sE46m%2B14ZbyqwdzhVK94iFrZV6ZEVawzvxZTElTUUk1Zl0uMdKqpORI74XbQq%2Bb%2BmuzzW%2ByotlBuCpkM9P9xNmkag6c8JBzAZ8e6HMs4YQyiXMoWnLIIQIRShplRzc9l3%2FonSbXCE%2BXkDkjjZMCwYgYtiMVclEo87F9z12IRq5htvuZuYQ%2FBCywgQ7wJprUt0TvtS9ANBmdCPgH2xJciUtuIwh%2Flmamm5uEVL3CIRJrocbVtOa0cmOmfrx%2FZTQv4R9UoMIbBi2P%2BzOWFv%2F9qslGX%2FVbFjdyvG2Isgmyl4NoGmw1%2FFw3gob00GAs%2FZ3HIcwGaFhu4dJftavSf%2B57GrwxNIpBys%2B%2FsdG%2BjhNcFgn%2F2FMbiuJ9la8HSWnQ4XRYV10g4MN2Qh9kF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180614T021912Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAIDF6WP3YC7EWOQKA%2F20180614%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Signature=2b9e74adf341aca650f0629a919922162d596f5b1748bced054aac4e4a9ee377' text={imgUrls[3].text} />
            </div>
            {/* <div>
              <ImageSlide url='https://s3.ca-central-1.amazonaws.com/clone-once-photos/pp-slideshow-1-braun-fan.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAAlhoM5dcn%2FLjZKYIXS9bpJ2myGn3Weu%2F7nGxrZTulfaVN5497p4MvKI5eqUdTuA0AKx5BE7kl0RFnWMGy4m5S0Md77yhA2SYkZPM20W4NTFmap6piIdahGsVhkfRfBguFmkhAcLt1VcwoFeEirnTl6rO6l8kSbjJq88ZahXEguz5dVDPSBG7VYCOyQE9cet6qUjiRTl6NaN4jkiUvOe69aQJg1xZXQkugJnn%2BkpLiwFZNkcYHNngDC7IRDhlEd3UwoxQ9oMwwIp2UFJmp6oC6SiplDIxTamfUn43uprb0VioncR9EJLZVTOdMFIjvwCJaKxeeEF5Kc9Dt6epTtNSQakq2wMIaxAAGgw2ODU1MzY1NjI4OTYiDJgfWCNmRBr1nWZV7Cq4A3LMFaR%2FPVvJpPKYBpZ5TKK4GquYDYOYpDgwHoJjQYMhoKUHhQC82Lztc%2FQYplbKXrafdVATuZwEU7zUgOq8o5QEOqBhgKYeOgkU%2B6dDcbq22my5L1SEWSwtacDzL3lXiNxGe84%2BWWDgmIXNQUDGB0Xv64Ph%2FfCzjISmfAc9nDSNvoksq7GIlNUJjIMOsr%2Fu99S44LS0sE46m%2B14ZbyqwdzhVK94iFrZV6ZEVawzvxZTElTUUk1Zl0uMdKqpORI74XbQq%2Bb%2BmuzzW%2ByotlBuCpkM9P9xNmkag6c8JBzAZ8e6HMs4YQyiXMoWnLIIQIRShplRzc9l3%2FonSbXCE%2BXkDkjjZMCwYgYtiMVclEo87F9z12IRq5htvuZuYQ%2FBCywgQ7wJprUt0TvtS9ANBmdCPgH2xJciUtuIwh%2Flmamm5uEVL3CIRJrocbVtOa0cmOmfrx%2FZTQv4R9UoMIbBi2P%2BzOWFv%2F9qslGX%2FVbFjdyvG2Isgmyl4NoGmw1%2FFw3gob00GAs%2FZ3HIcwGaFhu4dJftavSf%2B57GrwxNIpBys%2B%2FsdG%2BjhNcFgn%2F2FMbiuJ9la8HSWnQ4XRYV10g4MN2Qh9kF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180614T021314Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAIDF6WP3YC7EWOQKA%2F20180614%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Signature=2c3778184bcc27fd8a09d7a741943a2834e35c86e6fa280fa27dd691763658fc' text={imgUrls[3].text}/>
            </div> */}
            <Link key="IMAGE SLIDE BUTTON" to='/store'>
              <div className="btn-discover">Discover Now.</div>
            </Link>
            <section className="carousel-bottom" />
          </div>;
    }
}
import React, {Component} from 'react'

import badge from '../assets/images/only_once_badge.svg'

import Carousel from '../components/carousel'

export default class Home extends Component {
    render() {
        return (
          <div>
             <Carousel />
            <img src={badge} alt="badge"/>
          </div>
        )
    }
}
import React, {Component} from 'react'

import badge from '../assets/images/only_once_badge.svg'

export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="welcome">LETS GET THIS STARTED!</div>
            <img src={badge} alt="badge"/>
          </div>
        )
    }
}
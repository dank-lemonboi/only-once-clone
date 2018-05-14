import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../styles/footer.scss'

class Footer extends Component {
  constructor(props){
    super(props)

  }

 

render() {
  console.log(this.props.modalView)
    return (
    <section className='footer-parent'>
      <div className='footer-container'>
          <div className="link-wrapper">
            <span>Blog</span>
            <span>Imprint</span>
            <span>Terms & Conditions</span>
          </div>
          <span id='copywrite'>© 2018 Clone / Once Shop</span>
      </div>
    </section>

  )
 }
}

let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Footer)
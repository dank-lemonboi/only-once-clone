import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { modalEngaged } from '../ducks/reducer'
import '../styles/footer.scss'

class Footer extends Component {
  constructor(props){
    super(props)


    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    return this.props.modalEngaged(true)
    window.scrollY(0, 0)
  }

render() {
  console.log(this.props.modalView)
    return (
    <section className='footer-parent'>
      <div className="footer-wrapper">
        <span>Blog</span>
        <span>Imprint</span>
        <span>Terms & Conditions</span>
        <span onClick={ () => this.clickHandler() }>Admin</span>
      </div>
     <span id='copywrite'>© 2018 Clone / Once Shop</span>
    </section>

  )
 }
}

let mapStateToProps = (state) => {
  return {
    modalView: state.customerReducer.modalView
  }
}

export default connect(mapStateToProps, { modalEngaged } )(Footer)
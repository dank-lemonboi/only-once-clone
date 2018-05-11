import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { modalEngaged, adminMode } from '../ducks/reducer'
import '../styles/footer.scss'

class Footer extends Component {
  constructor(props){
    super(props)


    this.clickHandler = this.clickHandler.bind(this)
    this.logout = this.logout.bind(this)

  }

  clickHandler() {
    window.scrollTo(0, 0)
    this.props.modalEngaged(true)
  }

  logout() {
    axios.post('/api/auth/logout').then( () => {
      this.props.adminMode(false)
    })
  }

render() {
  console.log(this.props.modalView)
    return (
    <section className='footer-parent'>
      <div className="footer-wrapper">
        <span>Blog</span>
        <span>Imprint</span>
        <span>Terms & Conditions</span>
    {

      (!this.props.isAdmin)

    ?
        <span onClick={ () => this.clickHandler() }>Admin</span>

    :

       <span onClick={ () => this.logout() }>Admin Logout</span>
    }
      </div>
     <span id='copywrite'>© 2018 Clone / Once Shop</span>
    </section>

  )
 }
}

let mapStateToProps = (state) => {
  return {
    modalView: state.customerReducer.modalView,
    isAdmin: state.customerReducer.isAdmin
  }
}

export default connect(mapStateToProps, { modalEngaged, adminMode } )(Footer)
import React, { Component } from 'react';
import './App.scss';
import routes from './routes'
import { HashRouter}  from 'react-router-dom'
import Auth from './components/admin/adminAuth'
import {connect} from 'react-redux'
import { modalEngaged } from './ducks/reducer'
import badge from './assets/images/only_once_badge.svg'
// import '../src/styles/reset.scss'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.modalOut = this.modalOut.bind(this)
  }

  modalOut() {
    return this.props.modalEngaged(false)
  }

  render() {
    return (
    <HashRouter>
      <div className="app">
        { routes }
        <img className="badge" src={badge} alt="badge" />
      </div>
    </HashRouter>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    modalEngaged: state.customerReducer.modalEngaged,
    itemNumbers: state.customerReducer.itemNumbers
  }
}

export default connect(mapStateToProps, { modalEngaged } )(App)

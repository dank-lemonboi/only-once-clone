import React, { Component } from 'react';
import './App.scss';
import routes from './routes'
import { HashRouter}  from 'react-router-dom'
import Auth from './components/admin/adminAuth'
import {connect} from 'react-redux'
import { modalEngaged } from './ducks/reducer'

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
          
      </div>
    </HashRouter>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    modalEngaged: state.customerReducer.modalEngaged
  }
}

export default connect(mapStateToProps, { modalEngaged } )(App)

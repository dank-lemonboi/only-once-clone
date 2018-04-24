import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import routes from './routes'
import { HashRouter}  from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <HashRouter>
      <div className="app">
        {routes}
      </div>
    </HashRouter>
    )
  }
}

export default App;

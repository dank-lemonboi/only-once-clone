import React from 'react'

import { Switch, Route } from 'react-router-dom'

import home from './components/landingPage'

export default 
<Switch>
    <Route exact path='/' component={home}/>
</Switch>
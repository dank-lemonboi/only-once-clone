import React from 'react'

import { Switch, Route } from 'react-router-dom'

import home from './components/landingPage'
import clocks from './components/categories/clocks'
import electronics from './components/categories/electronics'
import lighting from './components/categories/lighting'
import industrial from './components/categories/industrial'
import sold from './components/categories/sold'
import homedeco from './components/categories/homeDeco'
import cart from './components/cart'

export default 
<Switch>
    <Route exact path='/' component={home}/>
    <Route path='/clocks/:item' component={clocks}/>
    <Route path='/electronics/:item' component={electronics}/>
    <Route path='/lighting/:item' component={lighting}/>
    <Route path='/industrial/:item' component={industrial}/>
    <Route path='/industrial/:item' component={industrial}/>
    <Route path='/homedeco/:item' component={homedeco}/>
    <Route path='/cart/:userId' component={cart}/>
</Switch>
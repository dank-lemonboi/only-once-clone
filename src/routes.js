import React from 'react'

import { Switch, Route } from 'react-router-dom'

import home from './components/landingPage'
import clocks from './components/categories/clocks'
import electronics from './components/categories/electronics'
import lighting from './components/categories/lighting'
import industrial from './components/categories/industrial'
import sold from './components/categories/sold'
import homedeco from './components/categories/homeDeco'

export default 
<Switch>
    <Route exact path='/' component={home}/>
    <Route path='/clocks' component={clocks}/>
    <Route path='/electronics' component={electronics}/>
    <Route path='/lighting' component={lighting}/>
    <Route path='/industrial' component={industrial}/>
    <Route path='/industrial' component={industrial}/>
    <Route path='/homedeco' component={homedeco}/>
</Switch>
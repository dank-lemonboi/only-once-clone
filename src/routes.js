import React from 'react'

import { Switch, Route } from 'react-router-dom'

import home from './components/landingPage'
import store from './components/mainStore'
import cart from './components/cart'
import details from './components/productDetails'
import adminAuth from './components/admin/adminAuth'
import dashboard from './components/admin/admin'

export default 
<Switch>
    <Route exact path='/' component={home}/>
    <Route exact path='/store' component={store}/>
    <Route exact path='/store/:type' component={store} />
    <Route exact path='/store/:type/:productId' component={details}/>
    <Route path='/cart' component={cart}/>
    <Route path='/admin' component={adminAuth} />
    <Route path='/dashboard' component={dashboard}/>
</Switch>


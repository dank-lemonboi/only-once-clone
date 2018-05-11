import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'

import customerReducer from './ducks/reducer'
import adminReducer from './ducks/adminReducer'

export default createStore(combineReducers({customerReducer, adminReducer}), applyMiddleware(reduxPromiseMiddleware()))

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
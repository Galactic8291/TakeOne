import thunk from 'redux-thunk'
import sagaMiddleWare from 'redux-saga'
import createLogger from 'redux-logger'
import { routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import DevTools from '../utils/DevTools'
import { counter } from '../reducers/module'

export default function configureDevStore (initialState) {
  const logger = createLogger()
  const middleware = [thunk, sagaMiddleWare(), logger]

  const reducer = combineReducers({
    counter,
    routing: routerReducer
  })

  const createMiddleware = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )

  const store = createStore(reducer, initialState, createMiddleware)
  return store
}


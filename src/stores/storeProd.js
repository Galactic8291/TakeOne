import thunk from 'redux-thunk'
import sagaMiddleware from 'redux-saga'
import { routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import reducer from '../reducers/module'

export default function configureProdStore (initialState) {
  const middleware = [thunk, sagaMiddleware()]

  const createMiddleware = compose(
    applyMiddleware(...middleware)
  )

  const store = createStore(reducer, initialState, createMiddleware)
  return store
}


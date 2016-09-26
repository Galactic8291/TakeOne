import thunk from 'redux-thunk'
import sagaMiddleWare from 'redux-saga'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

import DevTools from '../utils/DevTools'
import reducer from '../reducers/module'

export default function configureDevStore (initialState) {
  const logger = createLogger()
  const middleware = [thunk, sagaMiddleWare(), logger]

  const createMiddleware = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )

  const store = createStore(reducer, initialState, createMiddleware)

  if (module.hot) {
    module.hot.accept('../reducers/module', () => {
      store.replaceReducer(require('../reducers/module').default)
    })
  }

  return store
}


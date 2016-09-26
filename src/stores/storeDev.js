import thunk from 'redux-thunk'
import sagaMiddleWare from 'redux-saga'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

import DevTools from '../utils/DevTools'
import reducer from '../reducers/module'
import rootSaga from '../sagas/index'

export default function configureDevStore (initialState) {
  const logger = createLogger()
  const saga = sagaMiddleWare()

  const middleware = [thunk, saga, logger]

  const createMiddleware = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )

  const store = createStore(reducer, initialState, createMiddleware)

  saga.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers/module', () => {
      store.replaceReducer(require('../reducers/module').default)
    })
  }

  store.runSaga = saga.run

  return store
}


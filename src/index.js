import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import DevTools from './utils/DevTools'
import routes from './utils/routes'
import counter from './reducers/count'

const checkDevel = () => {
  if (__DEV__) return <DevTools />
}

const reducer = combineReducers({ counter, routing: routerReducer })
const devStore = createStore(reducer, DevTools.instrument())
const prodStore = createStore(reducer)
const store = __DEV__ ? devStore : prodStore

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch({ type: 'SET_STATE', state: { number: 1 } })

const AppContainer = () => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        { routes }
      </Router>
    </div>
  </Provider>
)

render(<AppContainer />, document.getElementById('app'))


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import DevTools from './utils/DevTools'
import counter from './reducers/count'
import { App, Home, Foo, Bar } from './components/module'

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
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='foo' component={Foo} />
          <Route path='bar' component={Bar} />
        </Route>
      </Router>
      { checkDevel() }
    </div>
  </Provider>
)

render(<AppContainer />, document.getElementById('app'))


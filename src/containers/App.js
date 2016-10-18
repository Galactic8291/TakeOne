import React from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../utils/routes'
import { configureDevStore, configureProdStore } from '../stores/module'

const devStore = configureDevStore()
const prodStore = configureProdStore()
const store = __DEV__ ? devStore : prodStore

const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      { routes}
    </Router>
  </Provider>
)

export default App


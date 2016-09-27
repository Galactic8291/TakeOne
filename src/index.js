import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'

import routes from './utils/routes'
import { configureDevStore, configureProdStore } from './stores/module'

const devStore = configureDevStore()
const prodStore = configureProdStore()
const store = __DEV__ ? devStore : prodStore

const history = syncHistoryWithStore(browserHistory, store)

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


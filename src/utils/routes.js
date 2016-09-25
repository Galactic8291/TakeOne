import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Home, Foo, Bar } from '../components/module'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='foo' component={Foo} />
    <Route path='bar' component={Bar} />
  </Route>
)

export default routes


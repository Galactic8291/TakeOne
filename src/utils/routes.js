import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Item, Test, TestTwo } from '../components/module'

const routes = (
  <Route path='/' component={Item}>
    <IndexRoute name='Test' component={Test} />
    <Route path='TestTwo' component={TestTwo} />
  </Route>
)

export default routes


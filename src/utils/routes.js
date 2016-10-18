import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { NavBar, Test, TestTwo } from '../components/module'

const routes = (
  <Route path='/' component={NavBar}>
    <IndexRoute name='Test' component={Test} />
    <Route path='TestTwo' component={TestTwo} />
  </Route>
)

export default routes


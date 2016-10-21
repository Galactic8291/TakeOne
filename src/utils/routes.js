import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Nav from '../containers/nav/Nav'
import { Test, TestTwo } from '../components/module'

const routes = (
  <Route path='/' component={Nav}>
    <IndexRoute name='Test' component={Test} />
    <Route path='TestTwo' component={TestTwo} />
  </Route>
)

export default routes


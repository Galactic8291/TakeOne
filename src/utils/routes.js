import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Item } from '../components/module'

const routes = (
  <Route path='/'>
    <IndexRoute component={Item} />
  </Route>
)

export default routes


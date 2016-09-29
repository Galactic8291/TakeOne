import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { menus } from '../components/Item'
import { Item } from '../components/module'

const routes = (
  <Route path='/'>
    <IndexRoute component={Item} menus={menus} />
  </Route>
)

export default routes


import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as burgerMenu } from 'redux-burger-menu'

export default combineReducers({
  routing: routerReducer,
  burgerMenu
})

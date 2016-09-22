import { INCREASE, DECREASE } from '../utils/constants'
import { Map } from 'immutable'

const count = (state = Map(), action) => {
  switch(action.type) {
    case INCREASE:
      state.set('number', action.amount + 1)
    case DECREASE:
      state.set('number', action.amount - 1)
    default:
      state
  }
}

export default count

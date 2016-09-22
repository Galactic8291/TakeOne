import { INCREASE, DECREASE } from '../utils/constants'

const count = (state = {}, action) => {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount }
    case DECREASE:
      return { number: state.number - action.amount }
    default:
      return { number: 1 }
  }
}

export default count

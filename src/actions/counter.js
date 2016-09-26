import { INCREASE, DECREASE } from '../utils/constants'

const increase = n => ({
  type: INCREASE,
  amount: n
})

const decrease = n => ({
  type: DECREASE,
  amount: n
})

const asyncIncrease = () => {
  return dispatch => {
    setTimeout(() => {
      const action = increase(1)
      dispatch(action)
    }, 5000)
  }
}

const asyncDecrease = () => ({
  type: 'ASYNC_DECREASE'
})

export { increase, decrease, asyncIncrease, asyncDecrease }


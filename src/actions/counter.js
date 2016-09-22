import { INCREASE, DECREASE } from '../utils/constants'

const increase = n => ({
  type: INCREASE,
  amount: n
})

const decrease = n => ({
  type: DECREASE,
  amount: n
})

export { increase, decrease }


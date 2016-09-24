import test from 'ava'
import { increase, decrease } from '../../src/actions/counter'

test('increase action', t => {
  const inc = increase(1)
  const action = { type: 'INCREASE', amount: 1 }

  t.deepEqual(inc, action)
})

test('decrease action', t => {
  const dec = decrease(1)
  const action = { type: 'DECREASE', amount: 1 }

  t.deepEqual(dec, action)
})


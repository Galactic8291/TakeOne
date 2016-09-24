import test from 'ava'
import counter from '../../src/reducers/count'
import { increase, decrease } from '../../src/actions/counter'

test('Counter reducer returns default state', t => {
  const expected = { number: 1 }
  const action = { type: 'nothing' }
  const state = counter({}, action)

  t.deepEqual(state, expected)
})

test('Counter reducer increases', t => {
  const expected = { number: 2 }
  const expected2 = { number: 3 }
  const state = counter({ number: 1 }, increase(1))
  const state2 = counter({ number: 2 }, increase(1))

  t.deepEqual(state, expected)
  t.deepEqual(state2, expected2)
})

test('Counter reducer decreases', t => {
  const expected = { number: 2 }
  const state = counter({ number: 3 }, decrease(1))

  t.deepEqual(state, expected)
})


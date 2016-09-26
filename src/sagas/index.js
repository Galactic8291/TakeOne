import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { decrease } from '../actions/counter'

function* asyncDecrease () {
  yield call(delay, 3000)
  yield put(decrease(1))
}

export default function* rootSaga () {
  yield takeEvery('ASYNC_DECREASE', asyncDecrease)
}


import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease, asyncIncrease, asyncDecrease } from '../actions/counter'

const Home = ({ number, increase, decrease, asyncIncrease, asyncDecrease }) => {
  const inc = () => increase(1)
  const dec = () => decrease(1)
  const asyncInc = () => asyncIncrease()
  const asyncDec = () => asyncDecrease()

  return (
    <div>
      Some State Changes:
      { number }
      <button onClick={inc}>Increase +</button>
      <button onClick={dec}>Decrease -</button>
      <button onClick={asyncInc}>Async Increase +</button>
      <button onClick={asyncDec}>Async Decrease -</button>
    </div>
  )
}

const mapStateToProps = state => ({ number: state.counter.number })

export default connect(
  mapStateToProps,
  { increase, decrease, asyncIncrease, asyncDecrease }
)(Home)


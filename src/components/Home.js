import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease, asyncIncrease } from '../actions/counter'

const Home = ({ number, increase, decrease, asyncIncrease }) => {
  const inc = () => increase(1)
  const dec = () => decrease(1)
  const asyncInc = () => asyncIncrease()

  return (
    <div>
      Some State Changes:
      { number }
      <button onClick={inc}>Increase +</button>
      <button onClick={dec}>Decrease -</button>
      <button onClick={asyncInc}>Async Increase +</button>
    </div>
  )
}

const mapStateToProps = state => ({ number: state.counter.number })

export default connect(
  mapStateToProps,
  { increase, decrease, asyncIncrease }
)(Home)


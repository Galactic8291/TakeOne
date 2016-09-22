import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/counter'

const Home = ({ number, increase, decrease }) => {
  const inc = () => increase(1)
  const dec = () => decrease(1)

  return (
    <div>
      Some State Changes:
      {number}
      <button onClick={inc}>Decrease +</button>
      <button onClick={dec}>Increase -</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.number.count }),
  { increase, decrease }
)(Home)


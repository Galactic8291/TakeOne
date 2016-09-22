import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/counter'

const Home = ({ number, increase, decrease }) => {
  const inc = () => increase(1)
  const dec = () => decrease(1)

  return (
    <div>
      Some State Changes:
      { number }
      <button onClick={inc}>Increase +</button>
      <button onClick={dec}>Decrease -</button>
    </div>
  )
}

const mapStateToProps = state => ({ number: state.counter.number })

export default connect(
  mapStateToProps,
  { increase, decrease }
)(Home)


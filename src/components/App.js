import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => {
  return (
    <div>
      <header>
        Links
        {' '}
        <Link to='/'>Home</Link>
        {' '}
      </header>
      <div style={{margin: '1.5em'}}>{children}</div>
    </div>
  )
}

export default App


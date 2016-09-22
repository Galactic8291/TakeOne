import React from 'react'
import { Link, browserHistory } from 'react-router'

const App = ({ children }) => {
  const travelToFoo = () => { browserHistory.push('/foo') }

  return (
    <div>
      <header>
        Links
        {' '}
        <Link to='/'>Home</Link>
        {' '}
        <Link to='/foo'>Foo</Link>
        {' '}
        <Link to='/bar'>Bar</Link>
      </header>
      <div>
        <button onClick={travelToFoo}>/Foo</button>
      </div>
      <div style={{margin: '1.5em'}}>{children}</div>
    </div>
  )
}

export default App


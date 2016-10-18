import React from 'react'
import { scaleRotate as Menu } from 'react-burger-menu'
import Links from './Links'

import styles from '../../style/style.css'

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '1.5em 0.5em 0',
    fontSize: '1.15em'
  }
}

const NavBar = ({ children }) => {
  return (
    <div id='outerContainer' style={{ height: '100%' }}>
      <Menu styles={menuStyles} id='scaleRotate' pageWrapId={'page-wrap'} outerContainerId={'outerContainer'}>
        {Links}
      </Menu>
      <main className={styles.container} id='page-wrap'>
        {children}
      </main>
    </div>
  )
}

export default NavBar

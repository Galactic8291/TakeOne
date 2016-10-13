import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import { scaleRotate as Menu } from 'react-burger-menu'
// import classNames from 'classnames'
import '../style/style.css'

const styles = {
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
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  }
}

const Demo = ({ children }) => {
  const RadiumLink = Radium(Link)

  const items = [
    <RadiumLink key='0' to='/TestTwo'>
      <i className='fa fa-fw fa-star-o' /><span>Favorites</span>
    </RadiumLink>,
    <a key='1' href=''><i className='fa fa-fw fa-bell-o' /><span>Alerts</span></a>,
    <a key='2' href=''><i className='fa fa-fw fa-envelope-o' /><span>Messages</span></a>,
    <a key='3' href=''><i className='fa fa-fw fa-comment-o' /><span>Comments</span></a>,
    <a key='4' href=''><i className='fa fa-fw fa-bar-chart-o' /><span>Analytics</span></a>,
    <a key='5' href=''><i className='fa fa-fw fa-newspaper-o' /><span>Reading List</span></a>
  ]

  console.log(items)

  return (
    <div id='outerContainer' style={{ height: '100%' }}>
      <Menu styles={styles} id='scaleRotate' pageWrapId={'page-wrap'} outerContainerId={'outerContainer'}>
        {items}
      </Menu>
      <main id='page-wrap'>
        {children}
      </main>
    </div>
  )
}

export default Demo

import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { action as toggleMenu } from 'redux-burger-menu'

import Menu from './Menu'
import MenuButton from '../MenuButton'
import menuStyles from './MenuStyles'
import styles from '../../style/style.css'

const Nav = ({ children, clickLink }) => {
  const RadiumLink = Radium(Link)

  return (
    <div id='outerContainer' style={{ height: '100%' }}>
      <Menu styles={menuStyles} pageWrapId={'page-wrap'} outerContainerId={'outerContainer'} customBurgerIcon={false} customBurgerCross={false} >
        <h1 className={styles.sidebar}>TFSB</h1>
        <RadiumLink onClick={clickLink} className={styles.link} to='/'>
          <i className='fa fa-fw fa-home' /><span>Home</span>
        </RadiumLink>
        <RadiumLink onClick={clickLink} className={styles.link} to='/TestTwo'>
          <i className='fa fa-fw fa-book' /><span>About</span>
        </RadiumLink>
      </Menu>
      <main className={styles.container} id='page-wrap'>
        <MenuButton />
        {children}
      </main>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  clickLink: () => dispatch(toggleMenu())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)


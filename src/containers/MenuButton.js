import React from 'react'
import { connect } from 'react-redux'
import { action as toggleMenu } from 'redux-burger-menu'

import styles from '../style/MenuButton.css'

const MenuButton = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle} className={styles.icon}>
      <span>toggle menu</span>
    </button>
  )
}

const mapStateToProps = (state) => ({ isOpen: state.burgerMenu.isOpen })
const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu(true))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)


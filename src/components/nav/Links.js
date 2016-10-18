import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import styles from '../../style/style.css'

const RadiumLink = Radium(Link)

const RadiumLinks = [
  <h1 key={styles.sidebar} className={styles.sidebar}>TFSB</h1>,
  <RadiumLink key={styles.link} className={styles.link} to='/'>
    <i className='fa fa-fw fa-home' /><span>Home</span>
  </RadiumLink>,
  <RadiumLink key={styles.link} className={styles.link} to='/TestTwo'>
    <i className='fa fa-fw fa-book' /><span>About</span>
  </RadiumLink>
]

export default RadiumLinks


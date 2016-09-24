import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router'

import { App } from '../../src/components/module'

test('App Renders Items', t => {
  const wrapper = shallow(<App />)
  const numLinks = wrapper.find(Link)

  t.is(numLinks.length, 3)
})


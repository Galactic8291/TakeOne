import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import { Bar } from '../../src/components/module'

test('Bar Renders Properly', t => {
  const wrapper = shallow(<Bar />)
  const val = wrapper.contains(<div>I Am Bar</div>)

  t.truthy(val)
})


import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import { Foo } from '../../src/components/module'

test('Foo Renders Properly', t => {
  const wrapper = shallow(<Foo />)
  const val = wrapper.contains(<div>I Am Foo</div>)

  t.truthy(val)
})


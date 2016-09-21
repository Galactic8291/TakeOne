import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import Test from '../src/test'

test('testing <Test />', t => {
  const wrapper = shallow(<Test />)

  t.is(wrapper.contains(<div id='test'></div>), true)
})


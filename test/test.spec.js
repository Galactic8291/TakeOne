import test from 'ava'
import axios from 'axios'

test('retrieving data', async t => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  const post = data.data
  t.is(post.userId, 1)
})

test('testing watch', t => {
  t.pass()
})


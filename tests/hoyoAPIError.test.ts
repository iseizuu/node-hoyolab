import { NodeHoyoError } from '../src'

import test from 'ava'

test('Should be return NodeHoyoError', (t) => {
  t.throws(
    () => {
      throw new NodeHoyoError('Error')
    },
    {
      instanceOf: NodeHoyoError,
      message: 'Error',
    },
  )
})

import { render } from '@redwoodjs/testing/web'

import ItemCounter from './ItemCounter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ItemCounter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemCounter />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import AddDataPage from './AddDataPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AddDataPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddDataPage />)
    }).not.toThrow()
  })
})

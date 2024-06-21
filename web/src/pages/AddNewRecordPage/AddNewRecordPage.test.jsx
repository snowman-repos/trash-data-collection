import { render } from '@redwoodjs/testing/web'

import AddNewRecordPage from './AddNewRecordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AddNewRecordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddNewRecordPage />)
    }).not.toThrow()
  })
})

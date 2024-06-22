import { render } from '@redwoodjs/testing/web'

import NewRecordForm from './NewRecordForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewRecordForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewRecordForm />)
    }).not.toThrow()
  })
})

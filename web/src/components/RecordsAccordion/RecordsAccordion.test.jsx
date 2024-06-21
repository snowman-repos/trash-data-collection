import { render } from '@redwoodjs/testing/web'

import RecordsAccordion from './RecordsAccordion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecordsAccordion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecordsAccordion />)
    }).not.toThrow()
  })
})

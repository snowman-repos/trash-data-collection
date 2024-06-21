import { render } from '@redwoodjs/testing/web'

import ThanksPage from './ThanksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ThanksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThanksPage />)
    }).not.toThrow()
  })
})

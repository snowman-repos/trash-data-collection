import { render } from '@redwoodjs/testing/web'

import TranscriptionModal from './TranscriptionModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TranscriptionModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TranscriptionModal />)
    }).not.toThrow()
  })
})

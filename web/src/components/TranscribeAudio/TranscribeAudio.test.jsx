import { render } from '@redwoodjs/testing/web'

import TranscribeAudio from './TranscribeAudio'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TranscribeAudio', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TranscribeAudio />)
    }).not.toThrow()
  })
})

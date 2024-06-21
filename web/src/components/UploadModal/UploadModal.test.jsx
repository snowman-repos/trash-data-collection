import { render } from '@redwoodjs/testing/web'

import UploadModal from './UploadModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadModal />)
    }).not.toThrow()
  })
})

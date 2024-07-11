// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import UploadModal from './UploadModal'

export default {
  component: UploadModal,
  args: {
    show: true,
    onHide: () => {},
    toggleModal: () => {},
    setters: {},
    selectedFile: null,
    setSelectedFile: () => {},
  },
}

export const Primary = {}

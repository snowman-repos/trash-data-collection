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

import TranscriptionModal from './TranscriptionModal'

export default {
  component: TranscriptionModal,
  args: {
    show: true,
    onHide: () => {},
    setTranscription: () => {},
    transcription: '',
    toggleModal: () => {},
    setters: {},
  },
}

export const Primary = {}

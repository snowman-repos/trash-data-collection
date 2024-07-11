// __mocks__/react-speech-recognition.js

export const useSpeechRecognition = jest.fn(() => ({
  transcript: '',
  resetTranscript: jest.fn(),
  finalTranscript: '',
  listening: false,
}))

export const SpeechRecognition = {
  startListening: jest.fn(),
  abortListening: jest.fn(),
  getRecognition: jest.fn(() => ({
    onresult: null, // Mock the onresult function
  })),
}

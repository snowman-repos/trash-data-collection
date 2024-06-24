import { Button } from '@govtechsg/sgds-react/Button'
import { useState } from 'react'
import 'regenerator-runtime/runtime'
import SpeechRecognition from 'react-speech-recognition'
import { useSpeechRecognition } from 'react-speech-recognition'

const TranscribeAudio = ({ transcription, setTranscription, isLoading }) => {
  const [activated, setActivated] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const { transcript, resetTranscript, finalTranscript, listening } =
    useSpeechRecognition()

  const activateMic = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.info('Microphone permissions granted')
        setActivated(true)
      })
      .catch((err) => {
        // alert('this is not going to work without microphone :)')
        console.error(err)
      })
  }

  const startTranscribing = (e) => {
    if (isListening === false) {
      SpeechRecognition.startListening({ continuous: true })
      setIsListening(true)
    }
  }

  const stopTranscribing = (e) => {
    if (isListening === true) {
      SpeechRecognition.abortListening()
      setIsListening(false)
    }
  }

  const recognition = SpeechRecognition.getRecognition()
  recognition.onresult = (e) => {
    if (e.results[0].isFinal) {
      console.log(e.results[0][0].transcript)
      setTranscription(
        transcription
          ? transcription + '\r\n' + e.results[0][0].transcript
          : e.results[0][0].transcript
      )
      resetTranscript()
    }
  }

  return (
    <>
      {!activated ? (
        <Button
          variant="outline-primary"
          disabled={isLoading}
          onClick={activateMic}
          className="flex-sm-grow-1 me-3"
        >
          Activate Mic
        </Button>
      ) : !isListening ? (
        <Button
          variant="outline-success"
          disabled={isLoading}
          onClick={startTranscribing}
          className="flex-sm-grow-1 me-3"
        >
          <i aria-hidden="true" className="bi bi-mic" /> Start
        </Button>
      ) : (
        <Button
          variant="outline-danger"
          disabled={isLoading}
          onClick={stopTranscribing}
          className="flex-sm-grow-1 me-3"
        >
          <i aria-hidden="true" className="bi bi-mic-fill" /> Stop
        </Button>
      )}
    </>
  )
}

export default TranscribeAudio

import { Button } from '@govtechsg/sgds-react/Button'
import { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition' // Ensure correct import

const TranscribeAudio = ({ transcription, setTranscription, isLoading }) => {
  const [activated, setActivated] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [micError, setMicError] = useState(false)
  const { resetTranscript } = useSpeechRecognition()

  useEffect(() => {
    const initializeSpeechRecognition = () => {
      if (SpeechRecognition) {
        const recognition = SpeechRecognition.getRecognition()
        if (recognition) {
          recognition.onresult = (e) => {
            if (e.results && e.results[0].isFinal) {
              console.log(e.results[0][0].transcript)
              setTranscription(
                transcription
                  ? transcription + '\r\n' + e.results[0][0].transcript
                  : e.results[0][0].transcript
              )
              resetTranscript()
            }
          }
        } else {
          console.error('Recognition instance not available')
        }
      } else {
        console.error('SpeechRecognition module not available')
      }
    }

    initializeSpeechRecognition()
  }, [setTranscription, transcription, resetTranscript])

  const activateMic = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('getUserMedia is not supported')
      return
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.info('Microphone permissions granted')
        setActivated(true)
      })
      .catch((err) => {
        console.error('Error accessing microphone:', err)
        setMicError(true)
      })
  }

  const startTranscribing = (e) => {
    if (!isListening) {
      if (SpeechRecognition && SpeechRecognition.startListening) {
        SpeechRecognition.startListening({ continuous: true })
        setIsListening(true) // Ensure this is triggered correctly
      } else {
        console.error('SpeechRecognition.startListening is not available')
      }
    }
  }

  const stopTranscribing = (e) => {
    if (isListening === true) {
      if (SpeechRecognition && SpeechRecognition.abortListening) {
        SpeechRecognition.abortListening()
        setIsListening(false)
      } else {
        console.error('SpeechRecognition.abortListening is not available')
      }
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
      {micError && <div className="text-danger">Mic permissions denied</div>}
    </>
  )
}

export default TranscribeAudio

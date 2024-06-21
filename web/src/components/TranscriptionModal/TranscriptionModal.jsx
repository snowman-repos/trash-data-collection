import { Modal } from '@govtechsg/sgds-react/Modal'
import { Button } from '@govtechsg/sgds-react/Button'
import { Form } from '@govtechsg/sgds-react/Form'
import { useState } from 'react'

const TranscriptionModal = ({
  show,
  onHide,
  setTranscription,
  transcription,
  transcriptionModalIsShown,
  toggleModal,
}) => {
  const [instructionsAreShown, setInstructionsAreShown] = useState(true)

  return (
    <Modal show={show} onHide={onHide} fullscreen="xxl-down" scrollable={true}>
      <Modal.Header>
        <h2 className="fs-2 mt-3 mb-3">
          <i aria-hidden="true" className="bi bi-pencil" /> Write / Record
        </h2>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => toggleModal(false)}
        ></button>
      </Modal.Header>
      <Modal.Body>
        {instructionsAreShown ? (
          <>
            <p>
              On the next screen, you can either write freestyle notes about the
              trash you collect or you can use the microphone button to
              transcribe audio.
            </p>
            <p>
              After you have finished recording your trash data, tap the ‘Done’
              button and the AI will try to read the text and pre-fill the form.
            </p>
            <img
              className="mw-100"
              src="/keyboard.png"
              alt="Keyboard with microphone key"
            />
          </>
        ) : (
          <Form.Control
            as="textarea"
            placeholder="Write or transcribe details about the trash data that you collect."
            value={transcription}
            className="transcription-box"
            onChange={(e) => {
              setTranscription(e.target.value)
            }}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        {instructionsAreShown ? (
          <Button
            variant="outline-primary"
            onClick={() => setInstructionsAreShown(false)}
          >
            Next
          </Button>
        ) : (
          <Button onClick={() => toggleModal(false)}>Done</Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default TranscriptionModal

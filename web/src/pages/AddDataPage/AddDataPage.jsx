import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Container } from '@govtechsg/sgds-react/Container'
import { RecordContext } from 'src/context'
import { Button } from '@govtechsg/sgds-react/Button'
import { Form } from '@govtechsg/sgds-react/Form'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'
import { Modal } from '@govtechsg/sgds-react/Modal'
import { FileUpload } from '@govtechsg/sgds-react/FileUpload'
import { useContext, useEffect, useState } from 'react'

const AddDataPage = () => {
  const [recordContext, setRecordContext] = useContext(RecordContext)
  const [totalWeight, setTotalWeight] = useState(0)
  const [cans, setCans] = useState(0)
  const [drums, setDrums] = useState(0)
  const [glass, setGlass] = useState(0)
  const [electronics, setElectronics] = useState(0)
  const [footwear, setFootwear] = useState(0)
  const [jerryCans, setJerryCans] = useState(0)
  const [plasticContainers, setPlasticContainers] = useState(0)
  const [plasticStraws, setPlasticStraws] = useState(0)
  const [smokingRelated, setSmokingRelated] = useState(0)
  const [other, setOther] = useState('')
  const [instructionsAreShown, setInstructionsAreShown] = useState(true)
  const [transcriptionModalIsShown, setTranscriptionModalIsShown] =
    useState(false)
  const [uploadModalIsShown, setUploadModalIsShown] = useState(false)
  const [transcription, setTranscription] = useState('')
  const [selectedFile, setSelectedFile] = useState({})

  useEffect(() => {
    if (!recordContext) navigate(routes.addNewRecord())
  })

  const onChangeFile = (data) => {
    setSelectedFile(data)
    console.log(data)
  }

  const handleSaveDataClick = () => {
    // submit to api
    const payload = {
      ...recordContext,
      totalWeight,
      cans,
      drums,
      glass,
      electronics,
      footwear,
      jerryCans,
      plasticContainers,
      plasticStraws,
      smokingRelated,
      other,
    }

    // if success, clear local storage

    console.log(payload)
  }

  const handleTranscriptionModalClose = () => {}
  const handleUploadModalClose = () => {}

  return (
    <>
      <Metadata
        title="Add Data"
        description="Provide details about the trash you've collected"
      />

      <Container fluid>
        <h1 className="fs-2 mt-3 mb-3">Add Data</h1>
        <Form className="text-center">
          <div className="bg-cyan-100 p-3 rounded">
            <h2 className="fs-4 mb-3">Need something easier?</h2>
            <Button
              variant="outline-dark"
              className="bg-light mb-3 mb-sm-0 me-0 me-sm-3"
              onClick={() => setTranscriptionModalIsShown(true)}
            >
              <i aria-hidden="true" className="bi bi-pencil" /> Write /
              Transcribe
            </Button>
            <Button
              variant="outline-dark"
              className="bg-light"
              onClick={() => setUploadModalIsShown(true)}
            >
              <i aria-hidden="true" className="bi bi-cloud-arrow-up" /> Upload
              Spreadsheet
            </Button>
          </div>

          <div className="bg-light-100 mt-3 mb-3 p-3 rounded">
            <h2 className="fs-4 mb-1" id="totalWeightLabel">
              Total Weight (kg)
            </h2>
            <Form.Text muted>(required)</Form.Text>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={totalWeight}
              setCount={setTotalWeight}
              aria-describedby="totalWeightLabel"
            />
          </div>

          <h2 className="fs-4 mb-3">Item Counts</h2>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="cansLabel">Aluminium Cans</Form.Label>
            <Form.Text className="lh-sm" muted>
              e.g. soft drink cans, spray cans
            </Form.Text>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={cans}
              setCount={setCans}
              aria-describedby="cansLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="drumsLabel">Drums</Form.Label>
            <Form.Text className="lh-sm" muted>
              large blue/white/grey water drums
            </Form.Text>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={drums}
              setCount={setDrums}
              aria-describedby="drumsLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="glassLabel">Glass Bottles</Form.Label>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={glass}
              setCount={setGlass}
              aria-describedby="glassLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="electronicsLabel">Electronics</Form.Label>
            <Form.Text className="lh-sm" muted>
              e.g. light bulbs, batteries, phones, circuitboards
            </Form.Text>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={electronics}
              setCount={setElectronics}
              aria-describedby="electronicsLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="footwearLabel">Footwear</Form.Label>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={footwear}
              setCount={setFootwear}
              aria-describedby="footwearLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="jerryCansLabel">Jerry Cans</Form.Label>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={jerryCans}
              setCount={setJerryCans}
              aria-describedby="jerryCansLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="plasticContainersLabel">
              Plastic Containers
            </Form.Label>
            <Form.Text className="lh-sm" muted>
              e.g. plastic bottles, plastic food boxes
            </Form.Text>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={plasticContainers}
              setCount={setPlasticContainers}
              aria-describedby="plasticContainersLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="plasticStrawsLabel">Plastic Straws</Form.Label>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={plasticStraws}
              setCount={setPlasticStraws}
              aria-describedby="plasticStrawsLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="smokingRelatedLabel">Smoking Related</Form.Label>
            <Form.Text className="lh-sm" muted>
              e.g. cigarette lighters, cigarette buts
            </Form.Text>
            <QuantityToggle
              size="lg"
              variant="secondary"
              count={smokingRelated}
              setCount={setSmokingRelated}
              aria-describedby="smokingRelatedLabel"
            />
          </div>

          <div className="rounded mb-3 p-3 border">
            <Form.Label id="otherLabel">Other</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="What else did you collect?"
              value={other}
              onChange={(e) => {
                setOther(e.target.value)
              }}
            />
          </div>

          <Button className="mb-3" size="lg" onClick={handleSaveDataClick}>
            Save Data
          </Button>
        </Form>
      </Container>
      <Modal
        show={transcriptionModalIsShown}
        onHide={handleTranscriptionModalClose}
        // size="xl"
        fullscreen="xl-down"
        scrollable={true}
      >
        <Modal.Header>
          <h2 className="fs-2 mt-3 mb-3">
            <i aria-hidden="true" className="bi bi-pencil" /> Write / Record
          </h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setTranscriptionModalIsShown(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          {instructionsAreShown ? (
            <>
              <p>
                On the next screen, you can either write freestyle notes about
                the trash you collect or you can use the microphone button to
                transcribe audio.
              </p>
              <p>
                After you have finished recording your trash data, tap the
                ‘Done’ button and the AI will try to read the text and pre-fill
                the form.
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
            <Button onClick={() => setTranscriptionModalIsShown(false)}>
              Done
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Modal
        show={uploadModalIsShown}
        onHide={handleUploadModalClose}
        // size="xl"
        fullscreen="xl-down"
        scrollable={true}
      >
        <Modal.Header>
          <h2 className="fs-2 mt-3 mb-3">
            <i aria-hidden="true" className="bi bi-cloud-arrow-up" /> Upload
            Spreadsheet
          </h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setUploadModalIsShown(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold">Upload a .xlsx or .csv file</p>
          <FileUpload
            controlId="fileupload"
            onChangeFile={onChangeFile}
            selectedFile={selectedFile}
            variant="secondary"
            accept=".csv,.xlsx"
          >
            <i className="bi bi-upload me-2"></i>Choose a file
          </FileUpload>
          <p>
            Your file must conform to{' '}
            <a
              href="/Trash-Data-Template.xlsx"
              title="Download the template"
              download
            >
              this template
            </a>
            .
          </p>
          <p>
            Please download and complete the template then upload it here. When
            you tap ‘Done’ the form will be completed based on the spreadsheet
            you uploaded.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setUploadModalIsShown(false)}>Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddDataPage

import { navigate, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { Container } from '@govtechsg/sgds-react/Container'
import { RecordContext } from 'src/context'
import { Button } from '@govtechsg/sgds-react/Button'
import { Form } from '@govtechsg/sgds-react/Form'
import { useContext, useEffect, useState } from 'react'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'
import { Toast } from '@govtechsg/sgds-react/Toast'
import ItemCounter from 'src/components/ItemCounter/ItemCounter'
import TranscriptionModal from 'src/components/TranscriptionModal/TranscriptionModal'
import UploadModal from 'src/components/UploadModal/UploadModal'

const CREATE_RECORD_MUTATION = gql`
  mutation CreateRecordMutation($input: CreateRecordInput!) {
    createRecord: createRecord(input: $input) {
      id
    }
  }
`

const AddDataPage = () => {
  const [recordContext, setRecordContext] = useContext(RecordContext)
  const [totalWeight, setTotalWeight] = useState(0)
  const [trashBagsUsed, setTrashBagsUsed] = useState(0)
  const [cans, setCans] = useState(0)
  const [drums, setDrums] = useState(0)
  const [glass, setGlass] = useState(0)
  const [electronics, setElectronics] = useState(0)
  const [footwear, setFootwear] = useState(0)
  const [jerryCans, setJerryCans] = useState(0)
  const [plasticContainers, setPlasticContainers] = useState(0)
  const [plasticStraws, setPlasticStraws] = useState(0)
  const [smokingRelated, setSmokingRelated] = useState(0)
  const [tires, setTires] = useState(0)
  const [other, setOther] = useState('')
  const [transcriptionModalIsShown, setTranscriptionModalIsShown] =
    useState(false)
  const [uploadModalIsShown, setUploadModalIsShown] = useState(false)
  const [transcription, setTranscription] = useState('')
  const [selectedFile, setSelectedFile] = useState({})
  const [dataError, setDataError] = useState()
  const [saveError, setSaveError] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const setters = {
    setTotalWeight,
    setTrashBagsUsed,
    setCans,
    setDrums,
    setElectronics,
    setFootwear,
    setGlass,
    setJerryCans,
    setOther,
    setPlasticContainers,
    setPlasticStraws,
    setSmokingRelated,
    setTires,
    setDataError,
  }

  useEffect(() => {
    if (!recordContext) navigate(routes.addNewRecord())
  })

  const handleCopyToClipboard = (e) => {
    e.preventDefault()

    const text = `
      Total Weight: ${totalWeight + 'kg'}
      Number of Trash Bags Used: ${trashBagsUsed}
      Electronics: ${electronics}
      Footwear: ${footwear}
      Glass: ${glass}
      Jerry Cans: ${jerryCans}
      Large Drums: ${drums}
      Metal Cans: ${cans}
      Plastic Containers: ${plasticContainers}
      Plastic Straws: ${plasticStraws}
      Smoking Related: ${smokingRelated}
      Tires: ${tires}
      Other: ${other}
    `

    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText(text)
        setCopied(true)
      } else {
        setDataError('Access to your clipboard was denied')
      }
    })
  }

  const [createRecord, { loading, error }] = useMutation(
    CREATE_RECORD_MUTATION,
    {
      onCompleted: () => {
        setIsLoading(false)
        navigate(routes.thanks())
      },
      onError: (error) => {
        setSaveError(true)
        console.log(error)
      },
    }
  )

  const handleSaveDataClick = () => {
    setIsLoading(true)

    // submit to api
    const input = {
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
      tires,
      other,
    }

    // if success, clear local storage

    console.log(input)

    createRecord({ variables: { input } })
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

          <ItemCounter
            id="cansLabel"
            label="Aluminium Cans"
            helperText="e.g. soft drink cans, spray cans"
            count={cans}
            setCount={setCans}
          />

          <ItemCounter
            id="drumsLabel"
            label="Drums"
            helperText="large blue/white/grey water drums"
            count={drums}
            setCount={setDrums}
          />

          <ItemCounter
            id="electronicsLabel"
            label="Electronics"
            helperText="e.g. light bulbs, batteries, phones, circuitboards"
            count={electronics}
            setCount={setElectronics}
          />

          <ItemCounter
            id="footwearLabel"
            label="Footwear"
            count={footwear}
            setCount={setFootwear}
          />

          <ItemCounter
            id="glassLabel"
            label="Glass Bottles"
            count={glass}
            setCount={setGlass}
          />

          <ItemCounter
            id="jerryCansLabel"
            label="Jerry Cans"
            helperText="e.g. light bulbs, batteries, phones, circuitboards"
            count={jerryCans}
            setCount={setJerryCans}
          />

          <ItemCounter
            id="plasticContainersLabel"
            label="Plastic Containers"
            helperText="e.g. plastic bottles, plastic food boxes"
            count={plasticContainers}
            setCount={setPlasticContainers}
          />

          <ItemCounter
            id="plasticStrawsLabel"
            label="Plastic Straws"
            count={plasticStraws}
            setCount={setPlasticStraws}
          />

          <ItemCounter
            id="smokingRelatedLabel"
            label="Smoking Related"
            helperText="e.g. cigarette lighters, cigarette buts"
            count={smokingRelated}
            setCount={setSmokingRelated}
          />

          <ItemCounter
            id="tiresLabel"
            label="Tires"
            count={tires}
            setCount={setTires}
          />

          <div className="rounded mb-3 p-3 border other-input">
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

          <a
            className="mb-3 d-block"
            href="#"
            title="Copy the data"
            onClick={handleCopyToClipboard}
          >
            Copy All Data to Clipboard
          </a>

          <Button
            className="mb-3"
            size="lg"
            onClick={handleSaveDataClick}
            disabled={isLoading}
            aria-disabled={!isLoading ? 'false' : 'true'}
          >
            {isLoading ? 'Saving…' : 'Save Data'}
          </Button>
        </Form>
      </Container>

      <TranscriptionModal
        onHide={handleTranscriptionModalClose}
        setTranscription={setTranscription}
        show={transcriptionModalIsShown}
        toggleModal={setTranscriptionModalIsShown}
        transcription={transcription}
        setters={setters}
      />

      <UploadModal
        onHide={handleUploadModalClose}
        show={uploadModalIsShown}
        toggleModal={setUploadModalIsShown}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        setters={setters}
      />

      <Toast
        onClose={() => setDataError()}
        show={typeof dataError === 'string'}
        status="danger"
      >
        <Toast.Header>
          <i className="bi bi-exclamation-diamond me-2"></i>
          <strong className="me-auto">Something went wrong</strong>
        </Toast.Header>
        <Toast.Body>{dataError}.</Toast.Body>
      </Toast>

      <Toast
        onClose={() => setCopied(false)}
        show={copied}
        status="success"
        autohide
      >
        <Toast.Header>
          <i className="bi bi-check-circle me-2"></i>
          <strong className="me-auto">Copied to clipboard!</strong>
        </Toast.Header>
      </Toast>

      {/* <Toast
        onClose={() => setSaveError(false)}
        show={saveError}
        status="danger"
        autohide
      >
        <Toast.Header>
          <i className="bi bi-exclamation-diamond me-2"></i>
          <strong className="me-auto">Something went wrong</strong>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast> */}
    </>
  )
}

export default AddDataPage

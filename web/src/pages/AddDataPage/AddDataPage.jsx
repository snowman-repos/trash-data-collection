import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Container } from '@govtechsg/sgds-react/Container'
import { RecordContext } from 'src/context'
import { Button } from '@govtechsg/sgds-react/Button'
import { Form } from '@govtechsg/sgds-react/Form'
import { useContext, useEffect, useState } from 'react'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'
import ItemCounter from 'src/components/ItemCounter/ItemCounter'
import TranscriptionModal from 'src/components/TranscriptionModal/TranscriptionModal'
import UploadModal from 'src/components/UploadModal/UploadModal'

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
  const [transcriptionModalIsShown, setTranscriptionModalIsShown] =
    useState(false)
  const [uploadModalIsShown, setUploadModalIsShown] = useState(false)
  const [transcription, setTranscription] = useState('')
  const [selectedFile, setSelectedFile] = useState({})

  useEffect(() => {
    if (!recordContext) navigate(routes.addNewRecord())
  })

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

    navigate(routes.thanks())
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
            id="glassLabel"
            label="Glass Bottles"
            count={glass}
            setCount={setGlass}
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

      <TranscriptionModal
        onHide={handleTranscriptionModalClose}
        setTranscription={setTranscription}
        show={transcriptionModalIsShown}
        toggleModal={setTranscriptionModalIsShown}
        transcription={transcription}
      />

      <UploadModal
        onHide={handleUploadModalClose}
        show={uploadModalIsShown}
        toggleModal={setUploadModalIsShown}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
    </>
  )
}

export default AddDataPage

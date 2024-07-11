import { Modal } from '@govtechsg/sgds-react/Modal'
import { Button } from '@govtechsg/sgds-react/Button'
import { FileUpload } from '@govtechsg/sgds-react/FileUpload'
import { useEffect } from 'react'
import readXlsxFile from 'read-excel-file'
import mixpanel from 'mixpanel-browser'
import config from 'src/config'

const UploadModal = ({
  show,
  onHide,
  toggleModal,
  selectedFile,
  setSelectedFile,
  setters,
}) => {
  useEffect(() => {
    mixpanel.init(config.mixPanelTrackingCode, {
      debug: true,
      persistence: 'localStorage',
    })
  })

  const onChangeFile = (data) => {
    setSelectedFile(data)
    try {
      readXlsxFile(data[0]).then((rows) => {
        setters.setTotalWeight(rows[9][1])
        setters.setTrashBagsUsed(rows[10][1])
        setters.setCans(rows[11][1])
        setters.setDrums(rows[12][1])
        setters.setElectronics(rows[13][1])
        setters.setFootwear(rows[14][1])
        setters.setGlass(rows[15][1])
        setters.setJerryCans(rows[16][1])
        setters.setOther(rows[21][1])
        setters.setPlasticContainers(rows[17][1])
        setters.setPlasticStraws(rows[18][1])
        setters.setSmokingRelated(rows[19][1])
        setters.setTires(rows[20][1])
      })
    } catch (error) {
      setters.setDataError(error)
    }
  }

  return (
    <Modal show={show} onHide={onHide} fullscreen="xl-down" scrollable={true}>
      <Modal.Header>
        <h2 className="fs-2 mt-3 mb-3">
          <i aria-hidden="true" className="bi bi-cloud-arrow-up" /> Upload
          Spreadsheet
        </h2>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => toggleModal(false)}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <p className="fw-bold">Upload a .xlsx file</p>
        <FileUpload
          controlId="fileupload"
          data-testid="fileupload"
          onChangeFile={onChangeFile}
          selectedFile={selectedFile}
          variant="secondary"
          accept=".xlsx"
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
          you tap ‘Done’ the form will be completed based on the spreadsheet you
          uploaded.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            toggleModal(false)
            mixpanel.track('Uploaded')
          }}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UploadModal

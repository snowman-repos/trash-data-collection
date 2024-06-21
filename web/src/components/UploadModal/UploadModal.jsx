import { Modal } from '@govtechsg/sgds-react/Modal'
import { Button } from '@govtechsg/sgds-react/Button'
import { FileUpload } from '@govtechsg/sgds-react/FileUpload'

const UploadModal = ({
  show,
  onHide,
  toggleModal,
  selectedFile,
  setSelectedFile,
}) => {
  const onChangeFile = (data) => {
    setSelectedFile(data)
    console.log(data)
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
          you tap ‘Done’ the form will be completed based on the spreadsheet you
          uploaded.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => toggleModal(false)}>Done</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UploadModal

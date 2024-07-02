import { navigate, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { useContext, useState } from 'react'
import { Container } from '@govtechsg/sgds-react/Container'
import { Button } from '@govtechsg/sgds-react/Button'
import { RecordContext } from 'src/context'
import { Toast } from '@govtechsg/sgds-react/Toast'
import NewRecordForm from 'src/components/NewRecordForm/NewRecordForm'

const CREATE_RECORD_MUTATION = gql`
  mutation CreateRecordMutation($input: CreateRecordInput!) {
    createRecord: createRecord(input: $input) {
      id
    }
  }
`

const AddNewRecordPage = () => {
  const [recordContext, setRecordContext] = useContext(RecordContext)
  const [isLoading, setIsLoading] = useState(false)
  const [date, setDate] = useState(
    localStorage.getItem('date') == null
      ? new Date()
      : new Date(localStorage.getItem('date'))
  )
  const [location, setLocation] = useState(
    localStorage.getItem('location') || ''
  )
  const [group, setGroup] = useState(localStorage.getItem('group') || '')
  const [numberOfVolunteers, setNumberOfVolunteers] = useState(
    parseInt(localStorage.getItem('numberOfVolunteers')) || 0
  )
  const [dataError, setDataError] = useState()

  const [createRecord, { loading, error }] = useMutation(
    CREATE_RECORD_MUTATION,
    {
      onCompleted: () => {
        setIsLoading(false)
        // clear local storage
        localStorage.removeItem('date')
        localStorage.removeItem('location')
        localStorage.removeItem('group')
        localStorage.removeItem('numberOfVolunteers')
        localStorage.removeItem('totalWeight')
        localStorage.removeItem('trashBagsUsed')
        localStorage.removeItem('cans')
        localStorage.removeItem('drums')
        localStorage.removeItem('electronics')
        localStorage.removeItem('footwear')
        localStorage.removeItem('glass')
        localStorage.removeItem('jerryCans')
        localStorage.removeItem('other')
        localStorage.removeItem('plasticContainers')
        localStorage.removeItem('plasticStraws')
        localStorage.removeItem('smokingRelated')
        localStorage.removeItem('tires')
        localStorage.removeItem('selectedFile')
        localStorage.removeItem('transcription')

        navigate(routes.thanks())
      },
      onError: (err) => {
        setDataError(err)
        console.log(err)
      },
    }
  )

  const handleClick = () => {
    setIsLoading(true)

    // submit to api
    const input = {
      ...recordContext,
      date,
      location,
      group,
      numberOfVolunteers,
    }

    console.log(input)

    createRecord({ variables: { input } })
  }

  return (
    <>
      <Metadata
        title="Add New Record"
        description="Provide details about your cleanup"
      />

      <Container fluid>
        <div className="d-flex flex-column dvh-100">
          <div>
            <h1 className="fs-2 mt-3 mb-3">Add New Cleanup Record</h1>
          </div>
          <div className="flex-grow-1 overflow-scroll">
            <NewRecordForm
              date={date}
              setDate={setDate}
              location={location}
              setLocation={setLocation}
              group={group}
              setGroup={setGroup}
              numberOfVolunteers={numberOfVolunteers}
              setNumberOfVolunteers={setNumberOfVolunteers}
            />
          </div>
          <div className="text-center">
            <Button
              className="mt-3 mb-3"
              size="lg"
              onClick={handleClick}
              disabled={isLoading}
              aria-disabled={!isLoading ? 'false' : 'true'}
            >
              {isLoading ? 'Saving…' : 'Save Cleanup Data'}
            </Button>
          </div>
        </div>
      </Container>
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
    </>
  )
}

export default AddNewRecordPage

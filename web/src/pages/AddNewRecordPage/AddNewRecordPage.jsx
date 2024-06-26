import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useContext, useState } from 'react'
import { Container } from '@govtechsg/sgds-react/Container'
import { Button } from '@govtechsg/sgds-react/Button'
import { RecordContext } from 'src/context'
import NewRecordForm from 'src/components/NewRecordForm/NewRecordForm'

const AddNewRecordPage = () => {
  const [recordContext, setRecordContext] = useContext(RecordContext)
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

  const handleClick = () => {
    setRecordContext({
      date,
      location,
      group,
      numberOfVolunteers,
    })
    navigate(routes.addData())
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
            <Button className="mt-3 mb-3" size="lg" onClick={handleClick}>
              <strong>Next:</strong> Add Data
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AddNewRecordPage

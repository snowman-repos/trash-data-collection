import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useContext, useState } from 'react'
import { Container } from '@govtechsg/sgds-react/Container'
import { Button } from '@govtechsg/sgds-react/Button'
import { Form } from '@govtechsg/sgds-react/Form'
import { DatePicker } from '@govtechsg/sgds-react/DatePicker'
import { Dropdown } from '@govtechsg/sgds-react/Dropdown'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'
import { RecordContext } from 'src/context'

import { groups } from 'src/cleanup-groups'

const AddNewRecordPage = () => {
  const [recordContext, setRecordContext] = useContext(RecordContext)
  const [date, setDate] = useState(new Date())
  const [location, setLocation] = useState()
  const [group, setGroup] = useState()
  const [numberOfVolunteers, setNumberOfVolunteers] = useState(0)
  const [locationInputDisabled, setLocationInputDisabled] = useState(true)

  const handleClick = () => {
    setRecordContext({
      date,
      location,
      group,
      numberOfVolunteers,
    })
    navigate(routes.addData())
  }

  const handleDateChange = (date) => {
    setDate(date)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleGroupChange = (e) => {
    setGroup(e.target.text)
  }

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(
        `latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`
      )
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBLTL1CPJREve5kG74enXaUe0Mbg-W5uXQ`
      )
      const results = await response.json()
      console.log(results.results[0].formatted_address)
      setLocation(results.results[0].formatted_address)
      setLocationInputDisabled(false)
    })
  } else {
    setLocationInputDisabled(false)
  }

  return (
    <>
      <Metadata
        title="Add New Record"
        description="Provide details about your cleanup"
      />

      <Container fluid>
        <div className="d-flex flex-column vh-100">
          <div>
            <h1 className="fs-2 mt-3 mb-3">Add New Cleanup Record</h1>
          </div>
          <div className="flex-grow-1 overflow-scroll">
            <Form>
              <Form.Group className="mb-3" controlId="cleanupDate">
                <Form.Label>Cleanup Date</Form.Label>
                <DatePicker
                  required={true}
                  maxDate={date.toString()}
                  onChangeDate={handleDateChange}
                  initialValue={date}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cleanupLocation">
                <Form.Label>Cleanup Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. East Coast Park Area G"
                  defaultValue={location}
                  disabled={locationInputDisabled}
                  onChange={handleLocationChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cleanupGroup">
                <Form.Label>Cleanup Group</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle>
                    {group ? group : 'Select Group'}
                    <i className="bi bi-chevron-down"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {groups.map((group, index) => (
                      <Dropdown.Item onClick={handleGroupChange} key={index}>
                        {group}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group className="mb-3" controlId="numberOfVolunteers">
                <Form.Label id="numberOfVolunteersLabel">
                  Number of Volunteers
                </Form.Label>
                <QuantityToggle
                  size="lg"
                  variant="secondary"
                  count={numberOfVolunteers}
                  setCount={setNumberOfVolunteers}
                  aria-describedby="numberOfVolunteersLabel"
                />
              </Form.Group>
            </Form>
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

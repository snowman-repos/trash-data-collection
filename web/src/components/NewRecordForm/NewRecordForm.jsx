import { useEffect, useState } from 'react'
import { Form } from '@govtechsg/sgds-react/Form'
import { DatePicker } from '@govtechsg/sgds-react/DatePicker'
import { Dropdown } from '@govtechsg/sgds-react/Dropdown'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'
import LocationCell from 'src/components/LocationCell/LocationCell'

import { groups } from 'src/cleanup-groups'

const NewRecordForm = ({
  date,
  setDate,
  location,
  setLocation,
  group,
  setGroup,
  numberOfVolunteers,
  setNumberOfVolunteers,
}) => {
  const [geolocation, setGeolocation] = useState()
  const [permissionRequested, setPermissionRequested] = useState(false)

  useEffect(() => {
    if ('geolocation' in navigator && !geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          console.log(
            `latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`
          )
          setGeolocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          })
          setPermissionRequested(true)
        },
        (error) => {
          console.log(error)
          setPermissionRequested(true)
        }
      )
    }
  })

  return (
    <Form>
      <Form.Group className="mb-3" controlId="cleanupDate">
        <Form.Label>Cleanup Date</Form.Label>
        <DatePicker
          required={true}
          maxDate={date.toString()}
          onChangeDate={(date) => {
            setDate(date)
          }}
          initialValue={date}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cleanupLocation">
        <Form.Label>Cleanup Location</Form.Label>
        {!permissionRequested && (
          <Form.Control
            type="text"
            placeholder="Trying to get location..."
            defaultValue={location}
            disabled
            onChange={(e) => {
              setLocation(e.target.value)
            }}
          />
        )}
        {permissionRequested && !geolocation && (
          <Form.Control
            type="text"
            placeholder="e.g. East Coast Park Area G"
            defaultValue={location}
            onChange={(e) => {
              setLocation(e.target.value)
            }}
          />
        )}
        {permissionRequested && geolocation && (
          <LocationCell
            lat={geolocation.lat}
            long={geolocation.long}
            location={location}
            setLocation={setLocation}
          />
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="cleanupGroup">
        <Form.Label>Cleanup Group</Form.Label>
        <Dropdown>
          <Dropdown.Toggle>
            {group !== '' ? group : 'Select Group'}
            <i className="bi bi-chevron-down"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {groups.map((group, index) => (
              <Dropdown.Item
                onClick={(e) => {
                  setGroup(e.target.text)
                }}
                key={index}
              >
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
  )
}

export default NewRecordForm

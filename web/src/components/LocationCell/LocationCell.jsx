import { useEffect } from 'react'
import { Form } from '@govtechsg/sgds-react/Form'

export const QUERY = gql`
  query GetLocationQuery($lat: Float!, $long: Float!) {
    address: getLocation(lat: $lat, long: $long)
  }
`

const LocationInput = ({
  location,
  setLocation,
  disabled,
  updateLocalStorage,
}) => {
  return (
    <Form.Control
      type="text"
      placeholder={
        disabled ? 'Trying to get location...' : 'e.g. East Coast Park Area G'
      }
      defaultValue={location}
      disabled={disabled}
      onChange={(e) => {
        setLocation(e.target.value)
        updateLocalStorage({
          property: 'location',
          value: e.target.value,
        })
      }}
    />
  )
}

export const Loading = ({ location, setLocation, updateLocalStorage }) => (
  <LocationInput
    disabled={true}
    location={location}
    setLocation={setLocation}
    updateLocalStorage={updateLocalStorage}
  />
)

export const Empty = ({ location, setLocation, updateLocalStorage }) => (
  <LocationInput
    disabled={false}
    location={location}
    setLocation={setLocation}
    updateLocalStorage={updateLocalStorage}
  />
)

export const Failure = ({
  error,
  location,
  setLocation,
  updateLocalStorage,
}) => {
  console.log(error)
  return (
    <LocationInput
      disabled={false}
      location={location}
      setLocation={setLocation}
      updateLocalStorage={updateLocalStorage}
    />
  )
}

export const Success = ({
  address,
  location,
  setLocation,
  updateLocalStorage,
}) => {
  useEffect(() => {
    setLocation(address)
  })
  return (
    <LocationInput
      disabled={false}
      location={address}
      setLocation={setLocation}
      updateLocalStorage={updateLocalStorage}
    />
  )
}

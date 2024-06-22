import { useEffect } from 'react'
import { Form } from '@govtechsg/sgds-react/Form'

export const QUERY = gql`
  query GetLocationQuery($lat: Float!, $long: Float!) {
    address: getLocation(lat: $lat, long: $long)
  }
`

const LocationInput = ({ location, setLocation, disabled }) => {
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
      }}
    />
  )
}

export const Loading = ({ location, setLocation }) => (
  <LocationInput
    disabled={true}
    location={location}
    setLocation={setLocation}
  />
)

export const Empty = ({ location, setLocation }) => (
  <LocationInput
    disabled={false}
    location={location}
    setLocation={setLocation}
  />
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ address, location, setLocation }) => {
  useEffect(() => {
    setLocation(address)
  })
  return (
    <LocationInput
      disabled={false}
      location={address}
      setLocation={setLocation}
    />
  )
}

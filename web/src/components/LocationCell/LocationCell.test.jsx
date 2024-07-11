import { render } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './LocationCell'

describe('LocationCell', () => {
  it('renders Loading successfully', () => {
    const setLocation = jest.fn()
    const updateLocalStorage = jest.fn()

    const { getByPlaceholderText } = render(
      <Loading
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
      />
    )

    const inputElement = getByPlaceholderText('Trying to get location...')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toBeDisabled()
  })

  it('renders Empty successfully', async () => {
    const setLocation = jest.fn()
    const updateLocalStorage = jest.fn()

    const { getByPlaceholderText } = render(
      <Empty
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
      />
    )

    const inputElement = getByPlaceholderText('e.g. East Coast Park Area G')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).not.toBeDisabled()
  })

  it('renders Failure successfully', async () => {
    const setLocation = jest.fn()
    const updateLocalStorage = jest.fn()
    const error = new Error('Location fetch failed')

    const { getByPlaceholderText } = render(
      <Failure
        error={error}
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
      />
    )

    const inputElement = getByPlaceholderText('e.g. East Coast Park Area G')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).not.toBeDisabled()
  })

  it('renders Success successfully', async () => {
    const setLocation = jest.fn()
    const updateLocalStorage = jest.fn()
    const address = 'Marina Bay Sands'

    const { getByDisplayValue } = render(
      <Success
        address={address}
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
      />
    )

    const inputElement = getByDisplayValue(address)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).not.toBeDisabled()
    expect(setLocation).toHaveBeenCalledWith(address)
  })
})

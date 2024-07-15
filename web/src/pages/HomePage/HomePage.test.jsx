import { render, fireEvent, waitFor } from '@redwoodjs/testing/web'
import HomePage from './HomePage'
import { navigate, routes } from '@redwoodjs/router'
import track from 'src/lib/analytics'

jest.mock('@redwoodjs/router', () => ({
  ...jest.requireActual('@redwoodjs/router'), // Use actual implementation for other functions
  navigate: jest.fn(),
  routes: {
    addData: jest.fn(() => '/add-data'),
  },
}))

jest.mock('src/lib/analytics', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Ensure correct setup for the mock function
const trackMock = jest.fn()
trackMock.mockResolvedValue({})
track.mockImplementation(trackMock)

describe('HomePage component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders HomePage component correctly', () => {
    const { getByText } = render(<HomePage />)
    expect(getByText('All Trash Data')).toBeInTheDocument()
    expect(getByText('Submit New Cleanup Data')).toBeInTheDocument()
    expect(trackMock).toHaveBeenCalledTimes(1)
    expect(trackMock).toHaveBeenCalledWith({ event: 'Home Page View' })
  })

  it('tracks "New Record" on button click', async () => {
    const { getByText } = render(<HomePage />)
    const submitButton = getByText('Submit New Cleanup Data')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(trackMock).toHaveBeenCalledTimes(2)
      expect(trackMock).toHaveBeenCalledWith({ event: 'New Record' })
      expect(navigate).toHaveBeenCalledWith(routes.addData())
    })
  })
})

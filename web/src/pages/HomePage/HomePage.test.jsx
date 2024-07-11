import { render, fireEvent, waitFor } from '@redwoodjs/testing/web'
import HomePage from './HomePage'
import { navigate, routes } from '@redwoodjs/router'
import mixpanel from 'mixpanel-browser'
import config from 'src/config'

jest.mock('@redwoodjs/router', () => ({
  ...jest.requireActual('@redwoodjs/router'), // Use actual implementation for other functions
  navigate: jest.fn(),
  routes: {
    addData: jest.fn(() => '/add-data'),
  },
}))

jest.mock('mixpanel-browser', () => ({
  init: jest.fn(),
  track: jest.fn(),
}))

describe('HomePage component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders HomePage component correctly', () => {
    const { getByText } = render(<HomePage />)
    expect(getByText('All Trash Data')).toBeInTheDocument()
    expect(getByText('Submit New Cleanup Data')).toBeInTheDocument()
  })

  it('tracks "New Record" on button click', async () => {
    const { getByText } = render(<HomePage />)
    const submitButton = getByText('Submit New Cleanup Data')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mixpanel.track).toHaveBeenCalledWith('New Record')
      expect(navigate).toHaveBeenCalledWith(routes.addData())
    })
  })

  it('initializes mixpanel with correct configuration', () => {
    render(<HomePage />)
    expect(mixpanel.init).toHaveBeenCalledWith(config.mixPanelTrackingCode, {
      debug: true,
      track_pageview: '/',
      persistence: 'localStorage',
    })
  })
})

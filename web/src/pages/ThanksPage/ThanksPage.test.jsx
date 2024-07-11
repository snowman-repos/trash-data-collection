import { render, fireEvent } from '@redwoodjs/testing/web'
import ThanksPage from '/src/pages/ThanksPage/ThanksPage'
import mixpanel from 'mixpanel-browser'
import { navigate } from '@redwoodjs/router'

// Mock mixpanel
jest.mock('mixpanel-browser', () => ({
  init: jest.fn(),
  track: jest.fn(),
}))

// Mock navigate function from @redwoodjs/router
jest.mock('@redwoodjs/router', () => ({
  ...jest.requireActual('@redwoodjs/router'), // Use actual implementation for other functions
  navigate: jest.fn(),
}))

describe('ThanksPage', () => {
  beforeEach(() => {
    // Clear mock function calls before each test
    mixpanel.init.mockClear()
    mixpanel.track.mockClear()
    navigate.mockClear()
  })

  it('renders the ThanksPage component without errors', () => {
    render(<ThanksPage />)
  })

  it('displays the correct initial text content', () => {
    const { getByText } = render(<ThanksPage />)
    expect(getByText('Thanks!')).toBeInTheDocument()
    expect(getByText('Your data has been saved.')).toBeInTheDocument()
  })

  it('handles feedback button clicks and tracks events', () => {
    const { getByRole, getByText } = render(<ThanksPage />)
    fireEvent.click(getByRole('button', { name: /Rating 1/i }))
    expect(mixpanel.track).toHaveBeenCalledWith('Feedback', { score: 1 })
    fireEvent.click(getByText('View All Trash Data'))
    expect(navigate).toHaveBeenCalledWith('/')
  })

  it('displays thank you message after giving feedback', () => {
    const { getByRole, getByText } = render(<ThanksPage />)
    fireEvent.click(getByRole('button', { name: /Rating 3/i }))
    expect(getByText('Thanks for the feedback!')).toBeInTheDocument()
  })

  it('displays correct email contact information', () => {
    const { getByText } = render(<ThanksPage />)
    expect(
      getByText(/Please send comments or suggestions to Darryl/i)
    ).toBeInTheDocument()
  })
})

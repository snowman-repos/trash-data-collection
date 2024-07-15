import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'
import track from 'src/lib/analytics'
import TranscriptionModal from './TranscriptionModal'

jest.mock('src/lib/analytics', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Ensure correct setup for the mock function
const trackMock = jest.fn()
trackMock.mockResolvedValue({})
track.mockImplementation(trackMock)

describe('TranscriptionModal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with instructions initially', () => {
    render(
      <TranscriptionModal
        show={true}
        onHide={() => {}}
        setTranscription={() => {}}
        transcription=""
        toggleModal={() => {}}
        setters={{}}
      />
    )
    expect(
      screen.getByText(/you can either write freestyle notes/i)
    ).toBeInTheDocument()
  })

  it('displays textarea after clicking Next button', async () => {
    render(
      <TranscriptionModal
        show={true}
        onHide={() => {}}
        setTranscription={() => {}}
        transcription=""
        toggleModal={() => {}}
        setters={{}}
      />
    )

    const nextButton = screen.getByRole('button', { name: /Next/i })
    fireEvent.click(nextButton)

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
  })

  it('displays TrashDataCell component when isLoading is true', async () => {
    render(
      <TranscriptionModal
        show={true}
        onHide={() => {}}
        setTranscription={() => {}}
        transcription=""
        toggleModal={() => {}}
        setters={{}}
      />
    )

    const nextButton = screen.getByRole('button', { name: /Next/i })
    fireEvent.click(nextButton)

    await waitFor(() => {
      const doneButton = screen.getByRole('button', { name: /Done/i })
      fireEvent.click(doneButton)
    })

    expect(screen.getByText(/Analyzing…/i)).toBeInTheDocument()
  })

  it('calls mixpanel.track when Done button is clicked', async () => {
    render(
      <TranscriptionModal
        show={true}
        onHide={() => {}}
        setTranscription={() => {}}
        transcription=""
        toggleModal={() => {}}
        setters={{}}
      />
    )

    const nextButton = screen.getByRole('button', { name: /Next/i })
    fireEvent.click(nextButton)

    await waitFor(() => {
      const doneButton = screen.getByRole('button', { name: /Done/i })
      fireEvent.click(doneButton)
    })

    expect(trackMock).toHaveBeenCalledTimes(1)
    expect(trackMock).toHaveBeenCalledWith({ event: 'Transcribed' })
  })

  it('renders with textarea after instructions are shown and isLoading is false', () => {
    render(
      <TranscriptionModal
        show={true}
        onHide={() => {}}
        setTranscription={() => {}}
        transcription=""
        toggleModal={() => {}}
        setters={{}}
      />
    )

    // Initially, instructions should be shown
    expect(screen.getByText(/Write \/ Record/i)).toBeInTheDocument()

    // Simulate clicking the Next button to hide instructions
    const nextButton = screen.getByRole('button', { name: /Next/i })
    fireEvent.click(nextButton)

    // Now, textarea should be visible instead of instructions
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeInTheDocument()
  })

  it('closes modal when Close button is clicked', () => {
    const toggleModalMock = jest.fn()
    render(
      <TranscriptionModal
        show={true}
        onHide={() => {}}
        setTranscription={() => {}}
        transcription=""
        toggleModal={toggleModalMock}
        setters={{}}
      />
    )

    const closeButton = screen.getByRole('button', { name: /Close/i })
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)

    expect(toggleModalMock).toHaveBeenCalled()
  })
})

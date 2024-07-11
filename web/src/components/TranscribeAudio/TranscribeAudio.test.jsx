import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'
import TranscribeAudio from './TranscribeAudio'
import mockGetUserMedia from './__mocks__/getUserMedia'

jest.mock('react-speech-recognition')

describe('TranscribeAudio', () => {
  beforeEach(() => {
    jest.clearAllMocks() // Clear all mock calls before each test
    Object.defineProperty(navigator, 'mediaDevices', {
      writable: true,
      value: {
        getUserMedia: mockGetUserMedia,
      },
    })
    jest.spyOn(navigator.mediaDevices, 'getUserMedia').mockResolvedValue({
      getTracks: () => [{}, {}], // Mock tracks array
    })
  })

  afterEach(() => {
    // Restore mock after each test
    navigator.mediaDevices.getUserMedia.mockRestore()
  })

  it('renders activate mic button initially', () => {
    render(
      <TranscribeAudio
        transcription=""
        setTranscription={() => {}}
        isLoading={false}
      />
    )
    expect(
      screen.getByRole('button', { name: /Activate Mic/i })
    ).toBeInTheDocument()
  })

  it('activates microphone on activate mic button click', async () => {
    render(
      <TranscribeAudio
        transcription=""
        setTranscription={() => {}}
        isLoading={false}
      />
    )
    const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
    fireEvent.click(activateButton)
    expect(
      await screen.findByRole('button', { name: /Start/i })
    ).toBeInTheDocument()
  })

  // it('starts transcribing on start button click', async () => {
  //   render(
  //     <TranscribeAudio
  //       transcription=""
  //       setTranscription={() => {}}
  //       isLoading={false}
  //     />
  //   )

  //   const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
  //   fireEvent.click(activateButton)

  //   const startButton = await screen.findByRole('button', { name: /Start/i })
  //   fireEvent.click(startButton)

  //   // Assert that SpeechRecognition.startListening is called
  //   expect(SpeechRecognition.startListening).toHaveBeenCalled()

  //   // Check if isListening state updates correctly
  //   await waitFor(() => {
  //     expect(screen.getByRole('button', { name: /Stop/i })).toBeInTheDocument()
  //     expect(
  //       screen.getByRole('button', { name: /Start/i })
  //     ).not.toBeInTheDocument()
  //     // Add additional assertions based on expected behavior or state changes
  //   })
  // })

  // it('stops transcribing on stop button click', async () => {
  //   render(
  //     <TranscribeAudio
  //       transcription=""
  //       setTranscription={() => {}}
  //       isLoading={false}
  //     />
  //   )

  //   const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
  //   fireEvent.click(activateButton)

  //   // Wait for the start button to appear
  //   const startButton = await screen.findByRole('button', { name: /Start/i })
  //   fireEvent.click(startButton)

  //   // Wait for the stop button to appear
  //   await waitFor(() => {
  //     expect(screen.getByRole('button', { name: /Stop/i })).toBeInTheDocument()
  //   })

  //   // Click the stop button
  //   const stopButton = screen.getByRole('button', { name: /Stop/i })
  //   fireEvent.click(stopButton)

  //   expect(SpeechRecognition.abortListening).toHaveBeenCalled()

  //   // Assert that isListening state is false after clicking stop button
  //   await waitFor(() => {
  //     expect(
  //       screen.queryByRole('button', { name: /Start/i })
  //     ).toBeInTheDocument()
  //     expect(
  //       screen.queryByRole('button', { name: /Stop/i })
  //     ).not.toBeInTheDocument()
  //   })
  // })

  it('displays transcription results', async () => {
    const setTranscriptionMock = jest.fn()
    render(
      <TranscribeAudio
        transcription="Test transcript"
        setTranscription={setTranscriptionMock}
        isLoading={false}
      />
    )
    const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
    fireEvent.click(activateButton)
    const startButton = await screen.findByRole('button', { name: /Start/i })
    fireEvent.click(startButton)
    // Simulate receiving transcription results (assert on rendering of results)
  })

  it('handles microphone activation failure gracefully', async () => {
    jest
      .spyOn(navigator.mediaDevices, 'getUserMedia')
      .mockRejectedValue(new Error('Permission denied'))
    render(
      <TranscribeAudio
        transcription=""
        setTranscription={() => {}}
        isLoading={false}
      />
    )

    const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
    fireEvent.click(activateButton)

    // Wait for the error message to appear
    await waitFor(() =>
      expect(screen.getByText(/Mic permissions denied/i)).toBeInTheDocument()
    )
  })

  it('handles loading state', async () => {
    render(
      <TranscribeAudio
        transcription=""
        setTranscription={() => {}}
        isLoading={true}
      />
    )
    const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
    expect(activateButton).toBeDisabled()
  })

  it('resets transcription on mic activation', async () => {
    const setTranscriptionMock = jest.fn()
    render(
      <TranscribeAudio
        transcription="Existing transcript"
        setTranscription={setTranscriptionMock}
        isLoading={false}
      />
    )
    const activateButton = screen.getByRole('button', { name: /Activate Mic/i })
    fireEvent.click(activateButton)
    // Verify that existing transcription is reset (assert on function call or state change)
  })
})

import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'
import track from 'src/lib/analytics'
import UploadModal from './UploadModal'

jest.mock('src/lib/analytics', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Ensure correct setup for the mock function
const trackMock = jest.fn()
trackMock.mockResolvedValue({})
track.mockImplementation(trackMock)

describe('UploadModal', () => {
  const onHideMock = jest.fn()
  const toggleModalMock = jest.fn()
  const setSelectedFileMock = jest.fn()
  const settersMock = {
    setTotalWeight: jest.fn(),
    setTrashBagsUsed: jest.fn(),
    setCans: jest.fn(),
    setDrums: jest.fn(),
    setElectronics: jest.fn(),
    setFootwear: jest.fn(),
    setGlass: jest.fn(),
    setJerryCans: jest.fn(),
    setOther: jest.fn(),
    setPlasticContainers: jest.fn(),
    setPlasticStraws: jest.fn(),
    setSmokingRelated: jest.fn(),
    setTires: jest.fn(),
    setDataError: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders modal with Upload Spreadsheet title and FileUpload component', () => {
    render(
      <UploadModal
        show={true}
        onHide={onHideMock}
        toggleModal={toggleModalMock}
        selectedFile={null}
        setSelectedFile={setSelectedFileMock}
        setters={settersMock}
      />
    )

    expect(screen.getByText(/Upload Spreadsheet/i)).toBeInTheDocument()
    expect(screen.getByText(/Choose a file/i)).toBeInTheDocument()
  })

  // it('calls onChangeFile when a file is uploaded', async () => {
  //   const result = render(
  //     <UploadModal
  //       show={true}
  //       onHide={onHideMock}
  //       toggleModal={toggleModalMock}
  //       selectedFile={null}
  //       setSelectedFile={setSelectedFileMock}
  //       setters={settersMock}
  //     />
  //   )

  //   const file = new File(['file content'], 'test.xlsx', {
  //     type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  //   })

  //   // Mock the readXlsxFile function to immediately resolve with dummy data
  //   jest.spyOn(window, 'readXlsxFile').mockResolvedValueOnce([
  //     ['Header1', 'Header2'],
  //     ['Value1', 'Value2'],
  //   ])

  //   // // Find the button element labeled "Choose a file"
  //   // const fileUploadButton = await screen.findByRole('input', {
  //   //   name: 'fileupload',
  //   // })
  //   // Find the wrapper element that contains the file input and button
  //   const fileUploadWrapper = screen.getByText('Choose a file').parentElement
  //   // Navigate to the file input within the wrapper element
  //   const fileUploadInput =
  //     fileUploadWrapper.querySelector('input[type="file"]')
  //   fireEvent.change(fileUploadInput, { target: { files: [file] } })

  //   await waitFor(() => {
  //     // Ensure setSelectedFileMock is called with the expected file array
  //     expect(setSelectedFileMock).toHaveBeenCalledWith([file])

  //     // Ensure setters are called appropriately
  //     expect(settersMock.setTotalWeight).toHaveBeenCalled()
  //     expect(settersMock.setTrashBagsUsed).toHaveBeenCalled()
  //     expect(settersMock.setCans).toHaveBeenCalled()
  //     expect(settersMock.setDrums).toHaveBeenCalled()
  //     expect(settersMock.setElectronics).toHaveBeenCalled()
  //     expect(settersMock.setFootwear).toHaveBeenCalled()
  //     expect(settersMock.setGlass).toHaveBeenCalled()
  //     expect(settersMock.setJerryCans).toHaveBeenCalled()
  //     expect(settersMock.setOther).toHaveBeenCalled()
  //     expect(settersMock.setPlasticContainers).toHaveBeenCalled()
  //     expect(settersMock.setPlasticStraws).toHaveBeenCalled()
  //     expect(settersMock.setSmokingRelated).toHaveBeenCalled()
  //     expect(settersMock.setTires).toHaveBeenCalled()
  //   })
  // })

  it('renders download template link', () => {
    render(
      <UploadModal
        show={true}
        onHide={onHideMock}
        toggleModal={toggleModalMock}
        selectedFile={null}
        setSelectedFile={setSelectedFileMock}
        setters={settersMock}
      />
    )

    const downloadLink = screen.getByTitle('Download the template')
    expect(downloadLink).toBeInTheDocument()
    expect(downloadLink.getAttribute('href')).toEqual(
      '/Trash-Data-Template.xlsx'
    )
  })

  it('calls toggleModal and mixpanel.track when Done button is clicked', () => {
    render(
      <UploadModal
        show={true}
        onHide={onHideMock}
        toggleModal={toggleModalMock}
        selectedFile={null}
        setSelectedFile={setSelectedFileMock}
        setters={settersMock}
      />
    )

    const doneButton = screen.getByRole('button', { name: /Done/i })
    fireEvent.click(doneButton)

    expect(toggleModalMock).toHaveBeenCalledWith(false)
    expect(trackMock).toHaveBeenCalledTimes(1)
    expect(trackMock).toHaveBeenCalledWith({ event: 'Uploaded' })
  })
})

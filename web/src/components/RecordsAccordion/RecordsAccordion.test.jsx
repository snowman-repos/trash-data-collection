import { render, screen, fireEvent, act } from '@redwoodjs/testing/web'
import writeXlsxFile from 'write-excel-file'
import RecordsAccordion from './RecordsAccordion'
import track from 'src/lib/analytics'
import config from 'src/config'

jest.mock('src/lib/analytics', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Ensure correct setup for the mock function
const trackMock = jest.fn()
trackMock.mockResolvedValue({})
track.mockImplementation(trackMock)

jest.mock('write-excel-file', () => jest.fn())

describe('RecordsAccordion component', () => {
  const records = [
    {
      id: 1,
      date: '2023-07-10T00:00:00Z',
      group: 'Cleanup Group A',
      totalWeight: 50,
      numberOfVolunteers: 10,
      trashBagsUsed: 20,
      cans: 5,
      drums: 2,
      electronics: 3,
      footwear: 4,
      glass: 1,
      jerryCans: 0,
      plasticContainers: 5,
      plasticStraws: 0,
      smokingRelated: 1,
      tires: 2,
      other: 'Miscellaneous',
    },
    {
      id: 2,
      date: '2023-07-11T00:00:00Z',
      group: 'Cleanup Group B',
      totalWeight: 30,
      numberOfVolunteers: 5,
      trashBagsUsed: 10,
      cans: 2,
      drums: 1,
      electronics: 0,
      footwear: 3,
      glass: 0,
      jerryCans: 1,
      plasticContainers: 4,
      plasticStraws: 0,
      smokingRelated: 0,
      tires: 1,
      other: 'Various items',
    },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders accordion items correctly', async () => {
    render(<RecordsAccordion records={records} />)

    records.forEach((record) => {
      expect(
        screen.getByText(new Date(record.date).toLocaleDateString('en-SG'))
      ).toBeInTheDocument()
      expect(screen.getByText(record.group)).toBeInTheDocument()
      expect(screen.getByText(`${record.totalWeight}kg`)).toBeInTheDocument()
    })
  })

  it('calls downloadExcel function when download link is clicked', async () => {
    render(<RecordsAccordion records={records} />)

    const downloadLink = screen.getByText('Download all data')

    await act(async () => {
      fireEvent.click(downloadLink)
    })

    expect(writeXlsxFile).toHaveBeenCalledTimes(1)
    expect(trackMock).toHaveBeenCalledTimes(1)
    expect(trackMock).toHaveBeenCalledWith({ event: 'Downloaded' })
  })
})

import { render } from '@redwoodjs/testing/web'
import DataTable from './DataTable'

const mockRecord = {
  location: 'Test Location',
  numberOfVolunteers: 5,
  totalWeight: 100,
  trashBagsUsed: 3,
  cans: 0,
  glass: 8,
  electronics: 0,
  footwear: 0,
  jerryCans: 0,
  plasticContainers: 0,
  plasticStraws: '',
  smokingRelated: 0,
  tires: 0,
  other: '',
}

describe('DataTable component', () => {
  it('renders basic table structure with data', () => {
    const { getByText } = render(<DataTable record={mockRecord} />)

    expect(getByText('Location')).toBeInTheDocument()
    expect(getByText('Test Location')).toBeInTheDocument()
    expect(getByText('Number of Volunteers')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('Trash per Volunteer (kg)')).toBeInTheDocument()
    expect(getByText('20.00')).toBeInTheDocument() // Calculation: 100 / 5 = 20.00
    expect(getByText('Glass')).toBeInTheDocument()
    expect(getByText('8')).toBeInTheDocument()
  })

  it('handles zero numberOfVolunteers scenario', () => {
    const recordWithZeroVolunteers = { ...mockRecord, numberOfVolunteers: 0 }
    const { queryByText } = render(
      <DataTable record={recordWithZeroVolunteers} />
    )

    expect(queryByText('Trash per Volunteer (kg)')).toBeNull() // Should not be rendered
  })

  it('handles non-zero values for specific categories', () => {
    const { queryByText } = render(<DataTable record={mockRecord} />)

    expect(queryByText('Cans')).toBeNull() // Should not be rendered
    expect(queryByText('Electronics')).toBeNull() // Should not be rendered
  })

  it('handles empty other field', () => {
    const { queryByText } = render(<DataTable record={mockRecord} />)

    expect(queryByText('Other')).toBeNull() // Should not be rendered
  })
})

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

export default { component: DataTable, args: { record: mockRecord } }

export const Primary = {}

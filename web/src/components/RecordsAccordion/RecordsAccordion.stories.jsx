import DataEntriesAccordion from './RecordsAccordion'

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

export default { component: DataEntriesAccordion, args: { records } }

export const Primary = {}

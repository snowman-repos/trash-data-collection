import NewRecordForm from './NewRecordForm'

export default {
  component: NewRecordForm,
  args: {
    date: new Date(),
    setDate: () => {},
    location: '',
    setLocation: () => {},
    group: '',
    setGroup: () => {},
    numberOfVolunteers: 0,
    setNumberOfVolunteers: () => {},
  },
}

export const Primary = {}

import { Loading, Empty, Failure, Success } from './LocationCell'

const meta = {
  title: 'Cells/LocationCell',
  tags: ['autodocs'],
}

const setLocation = () => {}
const updateLocalStorage = () => {}

export default meta

export const loading = {
  render: () => {
    return Loading ? (
      <Loading
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
      />
    ) : (
      <></>
    )
  },
}

export const empty = {
  render: () => {
    return Empty ? (
      <Empty
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
      />
    ) : (
      <></>
    )
  },
}

export const failure = {
  render: (args) => {
    return Failure ? (
      <Failure
        error={new Error('Oh no')}
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
        {...args}
      />
    ) : (
      <></>
    )
  },
}

export const success = {
  render: (args) => {
    return Success ? (
      <Success
        address="Marina Bay Sands"
        location=""
        setLocation={setLocation}
        updateLocalStorage={updateLocalStorage}
        {...args}
      />
    ) : (
      <></>
    )
  },
}

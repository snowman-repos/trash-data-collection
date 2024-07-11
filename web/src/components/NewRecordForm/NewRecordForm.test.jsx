import { render, act, screen } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'
import NewRecordForm from './NewRecordForm'
import { groups } from 'src/cleanup-groups'

describe('NewRecordForm component', () => {
  beforeEach(() => {
    // Mocking geolocation API
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    }

    global.navigator.geolocation = mockGeolocation
  })

  it('renders NewRecordForm correctly', async () => {
    await act(async () => {
      render(
        <NewRecordForm
          date={new Date()}
          setDate={() => {}}
          location=""
          setLocation={() => {}}
          group=""
          setGroup={() => {}}
          numberOfVolunteers={0}
          setNumberOfVolunteers={() => {}}
        />
      )
    })

    expect(screen.getByText('Cleanup Date')).toBeInTheDocument()
    expect(screen.getByText('Cleanup Location')).toBeInTheDocument()
    expect(screen.getByText('Number of Volunteers')).toBeInTheDocument()
  })

  // it('handles date change correctly', async () => {
  //   const setDate = jest.fn()
  //   await act(async () => {
  //     render(
  //       <NewRecordForm
  //         date={new Date()}
  //         setDate={setDate}
  //         location=""
  //         setLocation={() => {}}
  //         group=""
  //         setGroup={() => {}}
  //         numberOfVolunteers={0}
  //         setNumberOfVolunteers={() => {}}
  //       />
  //     )
  //   })

  //   const newDate = new Date('2023-07-10')
  //   const datePicker = screen.getByText('Cleanup Date')

  //   await act(async () => {
  //     datePicker.onChangeDate(newDate.toISOString())
  //   })

  //   expect(setDate).toHaveBeenCalledWith(newDate.toISOString())
  // })

  // it('handles location change correctly when geolocation is not available', async () => {
  //   const setLocation = jest.fn()
  //   await act(async () => {
  //     render(
  //       <NewRecordForm
  //         date={new Date()}
  //         setDate={() => {}}
  //         location=""
  //         setLocation={setLocation}
  //         group=""
  //         setGroup={() => {}}
  //         numberOfVolunteers={0}
  //         setNumberOfVolunteers={() => {}}
  //       />
  //     )
  //   })

  //   const locationInput = screen.getByPlaceholderText(
  //     'Trying to get location...'
  //   )
  //   expect(locationInput).toBeInTheDocument()

  //   userEvent.type(locationInput, 'East Coast Park Area G')

  //   expect(setLocation).toHaveBeenCalledWith('East Coast Park Area G')
  // })

  // it('handles location change correctly when geolocation is available', async () => {
  //   global.navigator.geolocation.getCurrentPosition.mockImplementation(
  //     (success) => {
  //       success({
  //         coords: {
  //           latitude: 1.2345,
  //           longitude: 2.3456,
  //         },
  //       })
  //     }
  //   )

  //   const setLocation = jest.fn()
  //   await act(async () => {
  //     render(
  //       <NewRecordForm
  //         date={new Date()}
  //         setDate={() => {}}
  //         location=""
  //         setLocation={setLocation}
  //         group=""
  //         setGroup={() => {}}
  //         numberOfVolunteers={0}
  //         setNumberOfVolunteers={() => {}}
  //       />
  //     )
  //   })

  //   const locationInput = screen.getByPlaceholderText(
  //     'Trying to get location...'
  //   )
  //   expect(locationInput).toBeInTheDocument()

  //   userEvent.type(locationInput, 'Marina Bay Sands')

  //   expect(setLocation).toHaveBeenCalledWith('Marina Bay Sands')
  // })

  // it('handles group selection correctly', async () => {
  //   await act(async () => {
  //     render(
  //       <NewRecordForm
  //         date={new Date()}
  //         setDate={() => {}}
  //         location=""
  //         setLocation={() => {}}
  //         group=""
  //         setGroup={() => {}}
  //         numberOfVolunteers={0}
  //         setNumberOfVolunteers={() => {}}
  //       />
  //     )
  //   })

  //   const dropdownToggle = screen.getByText('Select Group')
  //   userEvent.click(dropdownToggle)

  //   const dropdownItem = screen.getByText(groups[0])
  //   userEvent.click(dropdownItem)

  //   expect(screen.getByText(groups[0])).toBeInTheDocument()
  // })

  // it('handles number of volunteers change correctly', async () => {
  //   const setNumberOfVolunteers = jest.fn()
  //   await act(async () => {
  //     render(
  //       <NewRecordForm
  //         date={new Date()}
  //         setDate={() => {}}
  //         location=""
  //         setLocation={() => {}}
  //         group=""
  //         setGroup={() => {}}
  //         numberOfVolunteers={0}
  //         setNumberOfVolunteers={setNumberOfVolunteers}
  //       />
  //     )
  //   })

  //   const quantityToggle = screen.getByTestId('quantity-toggle')
  //   expect(quantityToggle).toBeInTheDocument()

  //   userEvent.click(quantityToggle)
  //   userEvent.click(screen.getByTestId('quantity-increment'))

  //   expect(setNumberOfVolunteers).toHaveBeenCalledWith(1)
  // })
})

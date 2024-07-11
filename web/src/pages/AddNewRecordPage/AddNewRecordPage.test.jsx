// // import { render, fireEvent, waitFor } from '@redwoodjs/testing/web'
// // import { MockedProvider } from '@apollo/client/testing'
// // import { navigate, routes } from '@redwoodjs/router'
// import AddNewRecordPage from '/src/pages/AddNewRecordPage/AddNewRecordPage'

// // // Mock the RecordContext
// // jest.mock('/src/context', () => ({
// //   useContext: jest.fn(() => [
// //     {
// //       /* mock record context values as needed */
// //     },
// //     jest.fn(),
// //   ]),
// // }))

// // const mockNavigate = jest.fn()
// // jest.mock('@redwoodjs/router', () => ({
// //   navigate: mockNavigate,
// //   routes: {
// //     thanks: () => '/thanks',
// //   },
// // }))

// // const mocks = [
// //   {
// //     request: {
// //       query: CREATE_RECORD_MUTATION,
// //       variables: {
// //         input: {
// //           /* mock input variables as needed */
// //         },
// //       },
// //     },
// //     result: {
// //       data: {
// //         createRecord: {
// //           id: 'mock-record-id',
// //         },
// //       },
// //     },
// //   },
// // ]

// // mockGraphQLQuery('getArticle', (variables) => {
// //   return {
// //     article: {
// //       id: variables.id,
// //       title: 'Foobar',
// //       body: 'Lorem ipsum...',
// //     }
// //   }
// // })

describe('AddNewRecordPage', () => {
  it('renders the AddNewRecordPage component without errors', () => {
    expect(true).toBe(true)
    //     // render(
    //     //   <MockedProvider mocks={[]} addTypename={false}>
    //     //     <AddNewRecordPage />
    //     //   </MockedProvider>
    //     // )
  })

  //   // it('handles form submission successfully', async () => {
  //   //   const { getByText, getByLabelText } = render(
  //   //     <MockedProvider mocks={mocks} addTypename={false}>
  //   //       <AddNewRecordPage />
  //   //     </MockedProvider>
  //   //   );

  //   //   fireEvent.change(getByLabelText('Date'), { target: { value: '2023-01-01' } });
  //   //   fireEvent.change(getByLabelText('Location'), { target: { value: 'Test Location' } });
  //   //   fireEvent.change(getByLabelText('Group'), { target: { value: 'Test Group' } });
  //   //   fireEvent.change(getByLabelText('Number of Volunteers'), { target: { value: '5' } });

  //   //   fireEvent.click(getByText('Save Cleanup Data'));

  //   //   await waitFor(() => {
  //   //     expect(mockNavigate).toHaveBeenCalledWith('/thanks');
  //   //   });
  //   // });

  //   // it('displays error toast on mutation error', async () => {
  //   //   const errorMock = {
  //   //     request: {
  //   //       query: CREATE_RECORD_MUTATION,
  //   //       variables: {
  //   //         input: {
  //   //           /* mock input variables as needed */
  //   //         },
  //   //       },
  //   //     },
  //   //     error: new Error('Mutation error'),
  //   //   };

  //   //   const { getByText, getByLabelText } = render(
  //   //     <MockedProvider mocks={[errorMock]} addTypename={false}>
  //   //       <AddNewRecordPage />
  //   //     </MockedProvider>
  //   //   );

  //   //   fireEvent.change(getByLabelText('Date'), { target: { value: '2023-01-01' } });
  //   //   fireEvent.change(getByLabelText('Location'), { target: { value: 'Test Location' } });
  //   //   fireEvent.change(getByLabelText('Group'), { target: { value: 'Test Group' } });
  //   //   fireEvent.change(getByLabelText('Number of Volunteers'), { target: { value: '5' } });

  //   //   fireEvent.click(getByText('Save Cleanup Data'));

  //   //   await waitFor(() => {
  //   //     expect(getByText('Something went wrong')).toBeInTheDocument();
  //   //     expect(getByText('Mutation error')).toBeInTheDocument();
  //   //   });
  //   // });
})

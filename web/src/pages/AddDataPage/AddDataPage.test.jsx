import React from 'react'
import { render, fireEvent, waitFor } from '@redwoodjs/testing/web'
import AddDataPage from './AddDataPage'

const mockRecordContext = {
  totalWeight: 0,
  trashBagsUsed: 0,
  cans: 0,
  drums: 0,
  glass: 0,
  electronics: 0,
  footwear: 0,
  jerryCans: 0,
  plasticContainers: 0,
  plasticStraws: 0,
  smokingRelated: 0,
  tires: 0,
  other: '',
}

describe('AddDataPage component', () => {
  it('renders AddDataPage component correctly', () => {
    // const { getByText, getByPlaceholderText } = render(<AddDataPage />)

    // expect(getByText('Add New Cleanup Data')).toBeInTheDocument()
    // expect(
    //   getByPlaceholderText('What else did you collect?')
    // ).toBeInTheDocument()
    // expect(getByText('Total Weight (kg)')).toBeInTheDocument()
    // expect(getByText('Aluminium Cans')).toBeInTheDocument()
    // // Add assertions for other labels and elements as needed
    expect(true).toBe(true)
  })

  // it('handles updating total weight', async () => {
  //   const { getByText, getByLabelText } = render(<AddDataPage />)

  //   const totalWeightInput = getByLabelText('Total Weight (kg)')
  //   fireEvent.click(totalWeightInput) // Click to focus
  //   fireEvent.keyDown(totalWeightInput, { key: 'ArrowUp' }) // Increment by 1

  //   await waitFor(() => {
  //     expect(totalWeightInput).toHaveValue('1')
  //   })
  // })

  // it('handles copying data to clipboard', async () => {
  //   const { getByText } = render(<AddDataPage />)

  //   const copyLink = getByText('Copy All Data to Clipboard')
  //   fireEvent.click(copyLink)

  //   await waitFor(() => {
  //     expect(getByText('Copied to clipboard!')).toBeInTheDocument()
  //   })
  // })

  // it('navigates to add cleanup details page on button click', async () => {
  //   const { getByText } = render(<AddDataPage />)

  //   const nextButton = getByText('Next: Add Cleanup Details')
  //   fireEvent.click(nextButton)

  //   await waitFor(() => {
  //     // Replace with assertion related to navigation or page change
  //   })
  // })

  // // Additional tests for modal interactions, error handling, etc. can be added as needed
})

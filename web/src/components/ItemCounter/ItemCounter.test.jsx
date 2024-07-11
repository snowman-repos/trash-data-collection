import React from 'react'
import { render, fireEvent } from '@redwoodjs/testing/web'
import ItemCounter from './ItemCounter'
import { Form } from '@govtechsg/sgds-react/Form'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'

const mockProps = {
  id: 'item-counter',
  label: 'Items',
  helperText: 'Select the number of items',
  count: 0,
  setCount: jest.fn(),
}

describe('ItemCounter', () => {
  it('renders ItemCounter component with label and helper text', () => {
    const { getByText } = render(<ItemCounter {...mockProps} />)
    expect(getByText('Items')).toBeInTheDocument()
    expect(getByText('Select the number of items')).toBeInTheDocument()
  })

  it('renders QuantityToggle component with correct props', () => {
    const { getByRole } = render(<ItemCounter {...mockProps} />)
    const quantityInput = getByRole('spinbutton')
    expect(quantityInput).toBeInTheDocument()
    expect(quantityInput).toHaveAttribute('aria-describedby', 'item-counter')
    expect(quantityInput).toHaveAttribute('type', 'number')
    expect(quantityInput).toHaveValue(0)
  })

  it('calls setCount function with updated count when QuantityToggle value changes', () => {
    const { getByRole } = render(<ItemCounter {...mockProps} />)
    const quantityInput = getByRole('spinbutton')

    fireEvent.change(quantityInput, { target: { value: '1' } })
    expect(mockProps.setCount).toHaveBeenCalledWith(1)

    fireEvent.change(quantityInput, { target: { value: '2' } })
    expect(mockProps.setCount).toHaveBeenCalledWith(2)
  })
})

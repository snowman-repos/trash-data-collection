import React from 'react'
import { render, screen } from '@redwoodjs/testing/web'
import DevFatalErrorPage from './FatalErrorPage'

describe('DevFatalErrorPage component', () => {
  it('renders without error', () => {
    const { getByRole } = render(<DevFatalErrorPage />)
    const mainElement = getByRole('main')
    const sectionElement = mainElement.firstElementChild

    expect(mainElement).toBeInTheDocument()
    expect(sectionElement).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })
})

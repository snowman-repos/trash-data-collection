import { render } from '@redwoodjs/testing/web'
import Component from '/src/pages/NotFoundPage/NotFoundPage'

describe('Component', () => {
  it('renders without crashing', () => {
    render(<Component />)
  })

  it('renders correct text content', () => {
    const { getByText } = render(<Component />)
    expect(getByText('404 Page Not Found')).toBeInTheDocument()
  })

  it('applies correct styles', () => {
    const { container } = render(<Component />)
    const mainElement = container.querySelector('main')
    const sectionElement = container.querySelector('section')
    const h1Element = container.querySelector('h1')

    // Check main element styles
    expect(mainElement).toHaveStyle(`
      display: flex;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
      text-align: center;
      background-color: #E2E8F0;
      height: 100vh;
    `)

    // Check section element styles
    expect(sectionElement).toHaveStyle(`
      background-color: white;
      border-radius: 0.25rem;
      width: 32rem;
      padding: 1rem;
      margin: 0 auto;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    `)

    // Check h1 element styles
    expect(h1Element).toHaveStyle(`
      font-size: 2rem;
      margin: 0;
      font-weight: 500;
      line-height: 1;
      color: #2D3748;
    `)
  })

  it('renders nested span with correct content', () => {
    const { getByText } = render(<Component />)
    expect(getByText('404 Page Not Found')).toContainHTML(
      '<span>404 Page Not Found</span>'
    )
  })
})

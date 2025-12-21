import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
  })

  it('contains a main heading', () => {
    render(<Header />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders external links', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})

import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders a footer element with correct className', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('footer')
  })

  it('renders external links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})

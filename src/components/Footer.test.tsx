import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders a footer element with correct className', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('footer')
  })

  it('renders external links with security attributes', () => {
    render(<Footer />)
    
    const links = screen.getAllByRole('link')
    
    // Should have at least one link (users may add/remove links)
    expect(links.length).toBeGreaterThan(0)
    
    // All links should open in new tab with security
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})

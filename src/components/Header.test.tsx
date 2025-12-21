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

  it('renders all external links with security attributes', () => {
    render(<Header />)
    
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

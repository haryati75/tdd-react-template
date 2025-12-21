import { render, screen } from '@testing-library/react'
import ExternalLink from './ExternalLink'

describe('ExternalLink component', () => {
  it('renders children as link text', () => {
    render(<ExternalLink href="https://example.com">Click me</ExternalLink>)
    const link = screen.getByRole('link', { name: 'Click me' })
    expect(link).toBeInTheDocument()
  })

  it('sets correct href attribute', () => {
    const testUrl = 'https://example.com/test'
    render(<ExternalLink href={testUrl}>Test Link</ExternalLink>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', testUrl)
  })

  it('opens link in new tab with security attributes', () => {
    render(<ExternalLink href="https://example.com">External</ExternalLink>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

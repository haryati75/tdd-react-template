import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('Card renders', () => {
  it('with children content', () => {
    render(<Card>Test content</Card>)
    const content = screen.getByText('Test content')
    expect(content).toBeInTheDocument()
  })

  it('with title when provided', () => {
    render(<Card title="Card Title">Content</Card>)
    const title = screen.getByRole('heading', { name: /card title/i })
    expect(title).toBeInTheDocument()
  })

  it('without header when title is not provided', () => {
    const { container } = render(<Card>Content only</Card>)
    const heading = screen.queryByRole('heading')
    const cardHeader = container.querySelector('.card-header')
    
    expect(heading).not.toBeInTheDocument()
    expect(cardHeader).not.toBeInTheDocument()
  })

  it('with custom className alongside default card class', () => {
    const { container } = render(<Card className="custom-class">Content</Card>)
    const cardElement = container.querySelector('.card')
    expect(cardElement).toHaveClass('card', 'custom-class')
  })

  it('with correct HTML structure', () => {
    const { container } = render(<Card title="Test">Content</Card>)
    const cardElement = container.querySelector('.card')
    const cardHeader = cardElement?.querySelector('.card-header')
    const cardBody = cardElement?.querySelector('.card-body')
    
    expect(cardElement).toBeInTheDocument()
    expect(cardHeader).toBeInTheDocument()
    expect(cardBody).toBeInTheDocument()
  })
})

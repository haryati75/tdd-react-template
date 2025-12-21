import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button renders', () => {
  it('with initial text', () => {
    render(<Button>any text</Button>)
    const button = screen.getByRole('button', { name: /any text/i })
    expect(button).toBeInTheDocument()
  })
})

describe('Button onClick', () => {
  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('calls onClick multiple times when clicked multiple times', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    
    await user.click(button)
    await user.click(button)
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(3)
  })
})
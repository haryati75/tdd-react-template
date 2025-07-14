import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App renders', () => {
  it('the main heading', () => {
    render(<App />)
    const heading = screen.getByText('Vite + ReactTS + Vitest')
    expect(heading).toBeInTheDocument()
  })

  it('the counter button with initial count of 0', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })
})

describe('App increments', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  it('count when button is clicked', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })

    await user.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('count multiple times when button is clicked multiple times', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })

    await user.click(button)
    await user.click(button)
    await user.click(button)

    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument()
  })

  it('displays the correct count text format', async () => {
    render(<App />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('count is 0')

    await user.click(button)
    expect(button).toHaveTextContent('count is 1')
  })
})


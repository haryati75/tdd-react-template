import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: 'Vite + ReactTS + Vitest + Playwright', level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the Card component with counter title', () => {
    render(<App />)
    const cardTitle = screen.getByRole('heading', { name: /counter: 0/i, level: 3 })
    expect(cardTitle).toBeInTheDocument()
  })

  it('renders the increment button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /click to increment/i })
    expect(button).toBeInTheDocument()
  })

  it('updates counter state when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByRole('button', { name: /click to increment/i })
    
    await user.click(button)
    
    expect(screen.getByRole('heading', { name: /counter: 1/i })).toBeInTheDocument()
  })
})


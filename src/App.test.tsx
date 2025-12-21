import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App component', () => {
  describe('Component Integration', () => {
    it('renders all components together (Header, Card, Button, Footer)', () => {
      render(<App />)
      
      // Header component
      expect(screen.getByRole('heading', { name: 'ReactTS Project Template', level: 1 })).toBeInTheDocument()
      expect(screen.getByText(/configured for learning Test-Driven Development/i)).toBeInTheDocument()
      
      // Card and Button components
      expect(screen.getByRole('heading', { name: /counter: 0/i, level: 3 })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /click to increment/i })).toBeInTheDocument()
      
      // Footer component
      expect(screen.getByRole('link', { name: 'GitHub Repo' })).toBeInTheDocument()
      expect(screen.getByText(/© 2025/i)).toBeInTheDocument()
    })
  })

  describe('User Interactions', () => {
    it('increments counter when button is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      
      const button = screen.getByRole('button', { name: /click to increment/i })
      
      await user.click(button)
      
      expect(screen.getByRole('heading', { name: /counter: 1/i })).toBeInTheDocument()
    })

    it('handles multiple increments correctly', async () => {
      const user = userEvent.setup()
      render(<App />)
      
      const button = screen.getByRole('button', { name: /click to increment/i })
      
      await user.click(button)
      await user.click(button)
      await user.click(button)
      
      expect(screen.getByRole('heading', { name: /counter: 3/i })).toBeInTheDocument()
    })

    it('maintains state isolation between renders', () => {
      const { unmount } = render(<App />)
      expect(screen.getByRole('heading', { name: /counter: 0/i })).toBeInTheDocument()
      
      unmount()
      
      render(<App />)
      expect(screen.getByRole('heading', { name: /counter: 0/i })).toBeInTheDocument()
    })
  })
})


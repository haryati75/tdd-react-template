import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const buttonClickHandler = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>ReactTS Project Template</h1>
      <p>
        This project is configured for learning Test-Driven Development (TDD) with
        Vitest for unit tests and Playwright for end-to-end tests.
      </p>
      <p>
        Learn TDD: 
        <a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" target="_blank" rel="noopener noreferrer">Martin Fowler</a>
        {' '}·{' '}
        <a href="https://testing-library.com/docs/guiding-principles/" target="_blank" rel="noopener noreferrer">RTL Principles</a>
        {' '}·{' '}
        <a href="https://vitest.dev/guide/" target="_blank" rel="noopener noreferrer">Vitest Guide</a>
        {' '}·{' '}
        <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer">Playwright Intro</a>
      </p>
      <Card title={`Counter: ${count}`}>
        <Button text="Click to increment" onClick={buttonClickHandler} />
      </Card>
      <footer className="footer">
        <p>
          <a href="https://github.com/haryati75/tdd-react-template" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          {' '}|{' '}
          © 2025 <a href="https://github.com/haryati75" target="_blank" rel="noopener noreferrer">Haryati H</a>
          {' '}|{' '}
          <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>
        </p>
        <p>
          Built with <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
          {' '}|{' '}
          Tests: <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a> (unit) & <a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">Playwright</a> (E2E)
        </p>
      </footer>
    </>
  )
}

export default App

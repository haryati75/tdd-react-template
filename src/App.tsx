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
      <h1>Vite + ReactTS + Vitest + Playwright</h1>
      <Card title={`Counter: ${count}`}>
        <Button text="Click to increment" onClick={buttonClickHandler} />
      </Card>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const incrementHandler = () => {
    setCount(count + 1)
  }

  const resetHandler = () => {
    setCount(0)
  }

  return (
    <>
      <Header />
      <Card title={`Counter: ${count}`}>
        <Button onClick={incrementHandler}>Increment</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </Card>
      <Footer />
    </>
  )
}

export default App

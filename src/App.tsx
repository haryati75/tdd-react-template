import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const buttonClickHandler = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Header />
      <Card title={`Counter: ${count}`}>
        <Button text="Click to increment" onClick={buttonClickHandler} />
      </Card>
      <Footer />
    </>
  )
}

export default App

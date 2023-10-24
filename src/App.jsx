import React from 'react'
import DigitalClock from './Components/DigitalClock'
import TimeOfDay from './Components/TimeOfDay'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <DigitalClock />
        <TimeOfDay />
      </div>
    </>
  )
}

export default App

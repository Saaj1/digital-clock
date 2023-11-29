import DigitalClock from './Components/DigitalClock'
import TimeOfDay from './Components/TimeOfDay'
import Location from './Components/Location'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <DigitalClock />
        <TimeOfDay />
        <Location />
      </div>
    </>
  )
}

export default App

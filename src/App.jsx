import { useState } from 'react'
import TimerDeportivo from './components/Pages/TimerDeportivo'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <TimerDeportivo/>
  </>
  )
}

export default App

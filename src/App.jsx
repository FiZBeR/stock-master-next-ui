import { useState } from 'react'
import { RutasMain } from '../src/rutas/RutasMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='constenedor'>
      <RutasMain/>
    </div>
  )
}

export default App

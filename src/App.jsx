import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Ejercicio3 from './components/Ejercicio3_4'
import MensajeLogado from './components/Ejercicio3_4'
import DevolverArray from './components/Ejercicio5'
import BotonAlert from './components/Ejercicio6'
import BuscarPokemon from './components/Ejercicio7'
import BuscarGengar from './components/Ejercicio8'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Header/>
      <MensajeLogado/>
      <DevolverArray/>
      <BotonAlert/>
      <BuscarPokemon/>
      <BuscarGengar/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}




export default App

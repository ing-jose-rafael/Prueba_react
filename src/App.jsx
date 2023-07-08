import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navar'

function App () {
  return (
    <div className='page'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App

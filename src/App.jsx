import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navar'
import { CardProvider } from './context/cardContext'

function App () {
  return (
    <CardProvider>
    <div className='page'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
    </CardProvider>
  )
}

export default App

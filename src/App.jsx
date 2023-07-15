import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navar'
import { DeportProvider } from './context/deportsContext'
import { CardProvider } from './context/cardContext'

function App () {
  return (
    <CardProvider>
    <div className='page'>
      <header>
        <Navbar/>
      </header>
      <DeportProvider>
        <main>
          <Outlet/>
        </main>
      </DeportProvider>
    </div>
    </CardProvider>
  )
}

export default App

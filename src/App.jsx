import './App.css'
import { ListOfCards } from './components/ListOfCards'
import { Navbar } from './components/Navar'

function App () {
  return (
    <div className='page'>
      <header>
        <Navbar/>
      </header>
      <main>
        <ListOfCards/>
      </main>
    </div>
  )
}

export default App

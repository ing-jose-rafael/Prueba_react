import './App.css'
import { cards } from './mooks/cards'

function App () {
  return (
    <div className='page'>
    <header>
      <h1>Prueba técnica</h1>
    </header>
      <ul>
        {
          cards.map(card => {
            return (
              <li key={card.id}>
                <div className="card-icon" dangerouslySetInnerHTML={{ __html: card.icono }}></div>
                {/* {card.icono.split('').slice(1, -1).join('')} */}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a>Ver más...</a>
              </li>
            )
          }
          )
        }
      </ul>
    </div>
  )
}

export default App

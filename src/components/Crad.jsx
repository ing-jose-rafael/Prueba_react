import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { useCrads } from '../hooks/useCrads'
// import { favorite } from '../helpers/getDetailCard'

// #249eff #ff1f6b
export function Crad ({ card, viewMore = false }) {
  const [isFavorite, setIsFavorite] = useState(card.favore)
  const { addToggleFavorited } = useCrads()

  const text = viewMore ? 'Regesar...' : 'Ver más...'
  const path = viewMore ? '/' : `/cards/${card.id}`
  const cardColor = isFavorite ? '#ff1f6b' : '#45f3ff'
  const cardIconClass = isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'

  const handleFav = () => {
    // favorite(card.id)
    setIsFavorite(!isFavorite)
    addToggleFavorited(card.id)
  }

  return (
    <div className="container">
      <div className="card" style={{ '--clr': cardColor }}>
        <div className="box">
          <div className="icon">
            <div className="iconBox">
              <button className='btn' onClick={handleFav}>
              <i className={cardIconClass}></i>
              </button>
            </div>
            {/* <div className="iconBox" dangerouslySetInnerHTML={{ __html: card.icono }}></div> */}
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to={path}>{text}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

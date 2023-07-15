import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { useCrads } from '../hooks/useCrads'
// import { favorite } from '../helpers/getDetailCard'

// #249eff #ff1f6b
/**
 * Componente para renderizar una tarjeta.
 * @param {Object} card - Datos de la tarjeta.
 * @param {boolean} viewMore - Indica si se debe mostrar el enlace "Ver más".
 * @returns {JSX.Element} - Elemento JSX que representa la tarjeta.
 */
export function Crad ({ card, viewMore = false }) {
  const [isFavorite, setIsFavorite] = useState(card.favore) // Declara un estado 'isFavorite' inicializado con el valor de 'card.favore' y una función 'setIsFavorite' para actualizarlo
  const { addToggleFavorited } = useCrads() // Obtiene la función 'addToggleFavorited' desde el hook 'useCrads'

  const text = viewMore ? 'Regesar...' : 'Ver más...' // Determina el texto del enlace en función de 'viewMore'
  const path = viewMore ? '/' : `/cards/${card.id}` // Determina la ruta del enlace en función de 'viewMore'
  const cardColor = isFavorite ? '#ff1f6b' : '#45f3ff' // Determina el color de fondo de la tarjeta en función de 'isFavorite'
  const cardIconClass = isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart' // Determina la clase del icono de la tarjeta en función de 'isFavorite'

  //  Maneja el evento de favorito.
  const handleFav = () => {
    setIsFavorite(!isFavorite) // Actualiza el estado 'isFavorite' invirtiendo su valor
    addToggleFavorited(card.id) // Ejecuta la función 'addToggleFavorited' pasando el ID de la tarjeta
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

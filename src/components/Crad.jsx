import './Card.css'

// #249eff #ff1f6b
export function Crad ({ card }) {
  return (
    <div className="container">
      <div className="card" style={{ '--clr': '#98ff21' }}>
        <div className="box">
          <div className="icon">
            <div className="iconBox" dangerouslySetInnerHTML={{ __html: card.icono }}></div>
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a>Ver más...</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Crad = ({ card }) => {
  console.log(card)
  return (
    <>
    <div className="card-icon" dangerouslySetInnerHTML={{ __html: card.icono }}></div>
    {/* {card.icono.split('').slice(1, -1).join('')} */}
    <h3>{card.title}</h3>
    <p>{card.description}</p>
    <a>Ver más...</a>
    </>
  )
}

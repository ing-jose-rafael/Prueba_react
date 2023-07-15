import './ContenCardStyles.css'
/**
 * Componente de tarjeta de contenido.
 *
 * Props:
 * - item: Objeto que representa el contenido de la tarjeta.
 * - category: Objeto que representa la categoría del contenido.
 */
export const ContenCard = ({ item, category }) => {
  return (
   <div className="content-card">
    <div className="box">
    <div className="imgBx">
        <video src={item.video} type='video/mp4' autoPlay loop muted/>
      </div>
    </div>
    <div className="box">
      <div className="content">
        <h2>{item.name}<br/><span>{category.name}</span></h2>
        <ul>
          {
            item.links.map((i, index) => {
              const follwers = Math.floor(Math.random() * 100)
              return (
                <li key={index}>
                  <a href={i.url} target="_blank>">{i.name}</a>
                  <span>{follwers}</span>
                </li>
              )
            })
          }
        </ul>
        <button>Follow</button>
      </div>
    </div>
    <div className="circle">
      <div className="imgBx">
        <img src={category?.icon}/>
      </div>
    </div>
   </div>
  )
}

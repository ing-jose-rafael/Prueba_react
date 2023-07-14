import { useState } from 'react'
import { category, deport as initialDeports } from '../mooks/deports'
import { ContenCard } from './ContenCard'
import './ContentStyle.css'

export const ContentsDeport = () => {
  const [deports] = useState(initialDeports)
  const [filter, setFilter] = useState(-1)

  const filterDeport = (deports) => {
    return deports.filter(item => item.categoriId === filter || filter === -1)
  }

  const getIconCategory = (id) => {
    return category.find(item => item.id === id)
  }

  const filtredDeport = filterDeport(deports)

  const handleChangeCategory = (e) => {
    const value = e.target.value
    setFilter(+value)
    // filterDeport()
  }
  return (
    <>
      <label>Categoría</label>
      <select onChange={handleChangeCategory}>
        <option value={-1}>Todos</option>
        {
          category.map(gener => (
            <option key={gener.id} value={gener.id}>{gener.name}</option>
          ))
        }
      </select>
    {/* <div className="container">
      <div className="cardDeport">
        <div className="lines"></div>
        <div className="imgBx">
          <img src="https://img.freepik.com/vector-gratis/bandera-cuadros-inicio-final-carrera_1017-20079.jpg?w=1480&t=st=1689166757~exp=1689167357~hmac=f9abba035984c4caff09f657d837e7870d9f12eb9af3f43216af2879177be58c" />
        </div>
        <div className="content">
          <div className="details">
            <h2>Motor</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum id repellendus cupiditate libero eveniet saepe delectus magnam? </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="cardDeport">
        <div className="lines"></div>
        <div className="imgBx">
          <img src="https://img.freepik.com/vector-gratis/personas-jugando-tenis-mesa_23-2148655541.jpg?w=1480&t=st=1689166545~exp=1689167145~hmac=46038e24ce119b16467ce2f8ace91e6115fcd0d9d1ba2cd80fca561faf0a99e4" />
        </div>
        <div className="content">
          <div className="details">
            <h2>Mesa</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum id repellendus cupiditate libero eveniet saepe delectus magnam? </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="cardDeport">
        <div className="lines"></div>
        <div className="imgBx">
        <img src="https://img.freepik.com/vector-gratis/vector-aislado-balon-futbol-realista-sobre-blanco_1284-41932.jpg?w=996&t=st=1689166193~exp=1689166793~hmac=e32e1e757d34eaa0c7e60963c0059a3fdfabe20c246f3fd6384a6eeb53f5fe77" />

        </div>
        <div className="content">
          <div className="details">
            <h2>Equipo</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum id repellendus cupiditate libero eveniet saepe delectus magnam? </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div> */}
      <div className='listDeport'>

        <ul className='listDeportUl'>
        {
          filtredDeport.map(item => {
            const category = getIconCategory(item.categoriId)
            return (<li key={item.id}><ContenCard item={item} category={category} /></li>)
          }
          )
        }
       </ul>
      </div>

    </>
  )
}

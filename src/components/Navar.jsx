import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuData } from '../helpers/menuData'
import './NavbarStyles.css'
export const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false)
  return (
    <nav className='navbar'>
      <h1 className='logo'>
        Jose <i className='fab fa-react'></i>
      </h1>
      <div className='toggle'>
        <i className={isToggle ? 'fas fa-times' : 'fas fa-bars'} onClick={() => setIsToggle(!isToggle)}></i>
      </div>
      <ul className={isToggle ? 'nav-menu active' : 'nav-menu'}>
        {
          MenuData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

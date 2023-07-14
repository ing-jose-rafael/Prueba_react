import './CreateStyle.css'
import { category } from '../mooks/deports'

export const Create = () => {
  return (
    <div className="create">
      <form>
        <div className="inputSelect">
          <label>Categoría</label>
          <select>
            {
              category.map(gener => (
                <option key={gener.id} value={gener.id}>{gener.name}</option>
              ))
            }
          </select>

        </div>
        <div className="inputBox">
          <input type="text" required/>
          <span>Deporte</span>
        </div>
        <div className="inputBox">
          <input type="text" required/>
          <span>Descipción</span>
        </div>
        <button className='btn1'><span>Guadar</span><i></i></button>
      </form>
    </div>
  )
}

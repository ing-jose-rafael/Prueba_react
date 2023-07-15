import './CreateStyle.css'
import { useDeports } from '../hooks/useDeports'
import { useState } from 'react'
import { category } from '../mooks/deports'

export const Create = () => {
  const { createDeport } = useDeports()
  const [categorySelected, setCategory] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const { name, description } = Object.fromEntries(formData.entries())
    createDeport({ name, description, categoriId: categorySelected })
    form.reset()
  }

  const handleChange = (e) => {
    setCategory(+e.target.value)
  }
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="inputSelect">
          <label>Categoría</label>
          <select onChange={handleChange}>
            {
              category.map(gener => (
                <option key={gener.id} value={gener.id}>{gener.name}</option>
              ))
            }
          </select>

        </div>
        <div className="inputBox">
          <input type="text" name='name' required/>
          <span>Deporte</span>
        </div>
        <div className="inputBox">
          <input type="text" name='description' required/>
          <span>Descipción</span>
        </div>
        <button className='btn1' type='submit'><span>Guadar</span><i></i></button>
      </form>
    </div>
  )
}

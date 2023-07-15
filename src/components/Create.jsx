import './CreateStyle.css'
import { useDeports } from '../hooks/useDeports'
import { useState } from 'react'
import { category } from '../mooks/deports'

/**
 * Componente para crear un nuevo deporte.
 * @returns {JSX.Element} - Elemento JSX que representa el formulario de creación de deporte.
 */
export const Create = () => {
  const { createDeport } = useDeports() // Obtiene la función 'createDeport' desde el hook 'useDeports'
  const [categorySelected, setCategory] = useState(1) // Declara un estado 'categorySelected' inicializado con 1 y una función 'setCategory' para actualizarlo

  /**
   * Maneja el envío del formulario de creación de deporte.
   * @param {Object} e - Evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault() // Previene el comportamiento predeterminado del evento de envío del formulario
    const form = e.target // Obtiene el formulario objetivo del evento
    const formData = new FormData(form) // Crea un objeto FormData a partir del formulario

    const { name, description } = Object.fromEntries(formData.entries()) // Obtiene los valores de los campos 'name' y 'description' del formulario
    createDeport({ name, description, categoriId: categorySelected }) // Llama a la función 'createDeport' pasando los datos del nuevo deporte
    form.reset() // Restablece los campos del formulario
  }

  /**
   * Maneja el cambio de categoría seleccionada.
   * @param {Object} e - Evento de cambio.
   */
  const handleChange = (e) => {
    setCategory(+e.target.value) // Actualiza el estado 'categorySelected' con el valor seleccionado convertido a número
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

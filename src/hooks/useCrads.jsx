import { useContext } from 'react'
import { CardContext } from '../context/cardContext'

/**
Hook personalizado para acceder al contexto de tarjetas.
@returns {Object} El valor del contexto de tarjetas.
@throws {Error} Si useDeports se utiliza fuera de un componente envuelto por el proveedor de contexto CardProvider.
*/
export function useCrads () {
  // Utilización de useContext para obtener el valor del contexto CardContext
  const context = useContext(CardContext)

  // Si el contexto es indefinido, se lanza un error indicando que useCards debe ser utilizado dentro de un CardProvider
  if (context === undefined) {
    throw new Error('useCards must be used within a CardProvider')
  }

  // Se devuelve el valor del contexto
  return context
}

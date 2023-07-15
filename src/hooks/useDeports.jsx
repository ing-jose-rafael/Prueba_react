import { useContext } from 'react'
import { DeportContext } from '../context/deportsContext'
/**
Hook personalizado para acceder al contexto de deportes.
@returns {Object} El valor del contexto de deportes.
@throws {Error} Si useDeports se utiliza fuera de un componente envuelto por el proveedor de contexto DeportProvider.
*/
export function useDeports () {
  // Utilización de useContext para obtener el valor del contexto DeportContext
  const context = useContext(DeportContext)
  // Si el contexto es indefinido, se lanza un error indicando que useCards debe ser utilizado dentro de un DeportProvider
  if (context === undefined) {
    throw new Error('useDeports must be used within a DeportProvider')
  }
  // Se devuelve el valor del contexto
  return context
}

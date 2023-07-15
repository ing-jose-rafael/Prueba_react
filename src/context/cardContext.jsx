import { useState, createContext } from 'react'
import { cards as cardslocal } from '../mooks/cards'

// Función para actualizar el almacenamiento local (localStorage)
export const updateLocalStorege = (cart) => {
  window.localStorage.setItem('cards', JSON.stringify(cart))
}

// Creación del contexto de Card
export const CardContext = createContext({})

// Componente proveedor de Card
export const CardProvider = ({ children }) => {
  // Utilización del hook useState para definir el estado de cards
  const [cards, setCard] = useState(() => {
    // Recuperar los datos almacenados en el localStorage con la clave 'cards'
    const storedCard = localStorage.getItem('cards')
    // Si existen datos almacenados, convertirlos de JSON a objeto; de lo contrario, utilizar los datos de cardslocal
    return storedCard !== null ? JSON.parse(storedCard) : cardslocal
  })

  // Función para alternar la propiedad "favorito" de una tarjeta según su id
  function addToggleFavorited (id) {
    // Buscar el índice de la tarjeta en el arreglo de cards
    const isItemInCard = cards.findIndex(i => i.id === id)

    if (isItemInCard >= 0) {
      // Crear una nueva copia del arreglo de cards con la tarjeta correspondiente actualizada
      const toggleFavorited = [
        ...cards.slice(0, isItemInCard),
        { ...cards[isItemInCard], favore: !cards[isItemInCard].favore },
        ...cards.slice(isItemInCard + 1)
      ]

      // Actualizar el estado de cards con la nueva copia
      setCard(toggleFavorited)
      // Actualizar el almacenamiento local (localStorage)
      updateLocalStorege(toggleFavorited)
    } else {
      // Si el id de la tarjeta no se encuentra en el arreglo, se devuelve el arreglo original sin cambios
      return cards
    }
  }

  // Función para obtener una tarjeta por su id
  function getCardById (id) {
    // Buscar el índice de la tarjeta en el arreglo de cards
    const isItemInCard = cards.findIndex(i => i.id === id)
    if (isItemInCard >= 0) {
      // Si se encuentra la tarjeta, se devuelve el objeto correspondiente
      return cards[isItemInCard]
    } else {
      // Si el id de la tarjeta no se encuentra en el arreglo, se devuelve null
      return null
    }
  }

  // Valor del contexto que se proporcionará a los componentes consumidores
  const contextValue = {
    cards,
    addToggleFavorited,
    getCardById
  }

  // Devolver el proveedor del contexto Card con su valor y los componentes hijos
  return (
    <CardContext.Provider value={contextValue}>
      {children}
    </CardContext.Provider>
  )
}

import { useState, createContext } from 'react'
import { cards as cardslocal } from '../mooks/cards'

export const updateLocalStorege = (cart) => {
  window.localStorage.setItem('cards', JSON.stringify(cart))
}

export const CardContext = createContext({})

export const CardProvider = ({ children }) => {
  const [cards, setCard] = useState(() => {
    const storedCard = localStorage.getItem('cards')
    return storedCard !== null ? JSON.parse(storedCard) : cardslocal
  })

  function addToggleFavorited (id) {
    const isItemInCard = cards.findIndex(i => i.id === id)
    if (isItemInCard >= 0) {
      const toggleFavorited = [
        ...cards.slice(0, isItemInCard),
        { ...cards[isItemInCard], favore: !cards[isItemInCard].favore },
        ...cards.slice(isItemInCard + 1)
      ]
      setCard(toggleFavorited)
      updateLocalStorege(toggleFavorited)
    } else {
      return cards
    }
  }

  function getCardById (id) {
    const isItemInCard = cards.findIndex(i => i.id === id)
    if (isItemInCard >= 0) {
      return cards[isItemInCard]
    } else {
      return null
    }
  }

  const contextValue = {
    cards,
    addToggleFavorited,
    getCardById
  }

  return (
    <CardContext.Provider value={contextValue}>
      {children}
    </CardContext.Provider>
  )
}

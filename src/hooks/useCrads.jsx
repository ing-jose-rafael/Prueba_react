import { useContext } from 'react'
import { CardContext } from '../context/cardContext'

export function useCrads () {
  const context = useContext(CardContext)

  if (context === undefined) {
    throw new Error('useCards must be used within a CardProvider')
  }
  return context
}

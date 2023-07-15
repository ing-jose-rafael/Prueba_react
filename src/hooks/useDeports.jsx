import { useContext } from 'react'
import { DeportContext } from '../context/deportsContext'

export function useDeports () {
  const context = useContext(DeportContext)

  if (context === undefined) {
    throw new Error('useDeports must be used within a DeportProvider')
  }
  return context
}

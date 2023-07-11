import { useParams } from 'react-router-dom'
import { Crad } from './Crad'
import { useCrads } from '../hooks/useCrads'

export const Detail = () => {
  const { id } = useParams()
  const { getCardById } = useCrads()
  const card = getCardById(+id)
  return (
    <Crad card={card} viewMore = {true}/>
  )
}

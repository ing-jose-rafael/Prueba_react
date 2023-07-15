import { Crad } from './Crad'
import { useCrads } from '../hooks/useCrads'

export const ListOfCards = () => {
  const { cards } = useCrads()
  return (
    <>
    {/* <Crad2/> */}
    <ul>
        {
          cards.map(card => {
            return (
              <li key={card.id} className='card'>
                <Crad card={card}/>
              </li>
            )
          }
          )
        }
      </ul>
    </>
  )
}

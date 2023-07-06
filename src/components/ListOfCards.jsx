import { cards } from '../mooks/cards'
import { Crad } from './Crad'
export const ListOfCards = () => {
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

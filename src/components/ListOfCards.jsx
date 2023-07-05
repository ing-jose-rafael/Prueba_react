import { cards } from '../mooks/cards'
import { Crad } from './Crad'
export const ListOfCards = () => {
  return (
    <>
    <ul>
        {
          cards.map(card => {
            return (
              <li key={card.id}>
                <Crad card={card} />
              </li>
            )
          }
          )
        }
      </ul>
    </>
  )
}

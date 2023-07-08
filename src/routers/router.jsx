import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { ListOfCards } from '../components/ListOfCards'
import { Detail } from '../components/Detail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListOfCards/>
        // children: [
      },
      {
        path: '/cards/:id',
        element: <Detail/>
      }
    ]
  }
])

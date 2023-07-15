import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { ListOfCards } from '../components/ListOfCards'
import { Detail } from '../components/Detail'
import { ContentsDeport } from '../components/Content'
import { Create } from '../components/Create'

// Creación del enrutador de navegación utilizando `createBrowserRouter`
export const router = createBrowserRouter([
  {
    path: '/', // 👈 Ruta principal
    element: <App />, // Componente asociado a la ruta principal
    children: [ // Ruta secundaria
      {
        path: '/',
        element: <ListOfCards/>
        // children: [
      },
      {
        path: '/cards/:id',
        element: <Detail/>
      },
      {
        path: '/CONTENT',
        element: <ContentsDeport/>
      },
      {
        path: '/create',
        element: <Create/>
      }
    ]
  }
])

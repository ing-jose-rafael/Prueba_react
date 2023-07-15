import { useState, createContext } from 'react'
import { deport as deportLocal } from '../mooks/deports'

// Función para actualizar el almacenamiento local (localStorage)
export const updateLocalStorege = (item) => {
  window.localStorage.setItem('deprots', JSON.stringify(item))
}

// Creación del contexto de Deport
export const DeportContext = createContext({})

// Componente proveedor de Deport
export const DeportProvider = ({ children }) => {
  // Utilización del hook useState para definir el estado de deports
  const [deports, setDeport] = useState(() => {
    // Recuperar los datos almacenados en el localStorage con la clave 'deprots'
    const storedCard = localStorage.getItem('deprots')
    // Si existen datos almacenados, convertirlos de JSON a objeto; de lo contrario, utilizar los datos de deportLocal
    return storedCard !== null ? JSON.parse(storedCard) : deportLocal
  })

  // Función para crear un nuevo deporte
  function createDeport (item) {
    const id = deports.length + 1
    // Crear un nuevo objeto de deporte con los datos proporcionados y valores adicionales
    const newDeporte = {
      id,
      ...item,
      video: 'https://v4.cdnpk.net/videvo_files/video/free/video0478/large_watermarked/_import_62735e1cd64e41.23043471_FPpreview.mp4',
      links: [
        {
          name: 'Liverpool',
          url: 'https://www.liverpoolfc.com/'
        },
        {
          name: 'Mancity',
          url: 'https://es.mancity.com/'
        },
        {
          name: 'Realmadrid',
          url: 'https://www.realmadrid.com/'
        }
      ]
    }
    // Actualizar el estado de deports agregando el nuevo deporte
    setDeport([...deports, newDeporte])
    // Actualizar el almacenamiento local con los datos actualizados de deports
    updateLocalStorege([...deports, newDeporte])
  }

  // Valor del contexto que se proporcionará a los componentes consumidores
  const contextValue = {
    deports,
    createDeport
  }

  // Devolver el proveedor del contexto Deport con su valor y los componentes hijos
  return (
    <DeportContext.Provider value={contextValue}>
      {children}
    </DeportContext.Provider>
  )
}

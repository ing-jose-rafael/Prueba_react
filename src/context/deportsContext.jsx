import { useState, createContext } from 'react'
import { deport as deportLocal } from '../mooks/deports'

export const updateLocalStorege = (item) => {
  window.localStorage.setItem('deprots', JSON.stringify(item))
}

export const DeportContext = createContext({})

export const DeportProvider = ({ children }) => {
  const [deports, setDeport] = useState(() => {
    const storedCard = localStorage.getItem('deprots')
    return storedCard !== null ? JSON.parse(storedCard) : deportLocal
  })

  function createDeport (item) {
    const id = deports.length + 1
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
    setDeport([...deports, newDeporte])
    updateLocalStorege([...deports, newDeporte])
  }

  const contextValue = {
    deports,
    createDeport
  }

  return (
    <DeportContext.Provider value={contextValue}>
      {children}
    </DeportContext.Provider>
  )
}

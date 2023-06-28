import React,{createContext, useContext, useState} from 'react'
import Links_Data from "./Links_Data"; 

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(true) 
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({page : '', links:[]})


  const displaySubmenu = (text, coordinates) => { 
    const page = Links_Data.find(link => link.page === text)
    setPage(page) 
    setLocation(coordinates) 
    setSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setSubmenuOpen(false)
  }

  
  return (
      <AppContext.Provider value={{isSubmenuOpen, displaySubmenu, closeSubmenu, location, page}}>{ children}</AppContext.Provider>
  )
}
 
export const useGlobalContext = () => { 
   return useContext(AppContext)  
}

export default AppProvider;
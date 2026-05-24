import React, { createContext } from 'react'
export const DataContext=createContext()
const Context = ({children}) => {  
   const dataObj={
    "name":"BASAR",
    "place":"PURNIA"
   }
  return (
    <>
        <DataContext.Provider value={dataObj} >
            {children}
        </DataContext.Provider>
    </>
  )
}

export default Context
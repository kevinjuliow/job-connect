import React, { createContext, useState } from 'react'

const AppContext = (props) => {
  const AppContext = createContext(null); 
  const [auth , setAuth] = useState({})

  const value = {auth , setAuth}
  return (
    <AppContext.Provider value={value }>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
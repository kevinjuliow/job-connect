import  { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const AppContext = createContext(null); 

const ContextProvider = ({children}) => {
  const [auth, setAuth] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const value = { 
    auth,
    setAuth,
    isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider
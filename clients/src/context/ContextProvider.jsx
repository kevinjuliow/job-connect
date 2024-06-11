import  { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const AppContext = createContext(null); 

const ContextProvider = ({children}) => {
  const [auth, setAuth] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [searchQuery , setSearchQuery] = useState("");
  const [isInPath, setIsInPath] = useState(false)

  // For company, jobs
  const [isInDetail, setIsInDetail] = useState(false)

  const clickedNav = (setTrue , setFalse1 , setFalse2 , setFalse3 ) =>{
    setTrue(true)
    setFalse1(false)
    setFalse2(false)
    setFalse3(false)
    }

  const value = { 
    auth,
    setAuth,
    isLoggedIn,
    setIsLoggedIn, 
    searchQuery, 
    setSearchQuery,
    isInPath,
    setIsInPath,
    isInDetail,
    setIsInDetail ,
    clickedNav
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
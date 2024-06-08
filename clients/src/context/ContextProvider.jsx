import  { createContext, useState } from 'react'
import PropTypes from 'prop-types';


const AppContext = createContext(null); 


const ContextProvider = (props) => {

  const [auth , setAuth] = useState({})

  const value = {auth , setAuth}
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider
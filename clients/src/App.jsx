import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login"
import LandingPage from "./pages/LandingPages/LandingPage"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/ContextProvider";
import Explore from "./pages/ExplorePages/Explore";
import Profile from "./pages/ProfilePages/Profile";
import Signup from "./pages/Auth/Signup"

function App() {
  const { auth } = useContext(AppContext)

  useEffect(()=>{
    console.log(auth)
  } , [auth])
  
  const isAuthenticated = Object.keys(auth).length === 0;
  console.log(auth);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated? <LandingPage /> : <Explore />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/explore" element={<Explore/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
   
  );
}

export default App;

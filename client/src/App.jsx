import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "./context/AppContext"
import Login from "./pages/Auth/Login"
import LandingPage from "./pages/LandingPages/LandingPage"
import Explore from "./pages/ExplorePages/Explore"

function App() {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/explore" element={<Explore/>} />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;

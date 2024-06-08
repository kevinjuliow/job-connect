import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login"
import LandingPage from "./pages/LandingPages/LandingPage"
import ContextProvider from "./context/ContextProvider";
// import Explore from "./pages/ExplorePages/Explore"

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/explore" element={<Explore/>} /> */}
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

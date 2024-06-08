import "./App.css";
import Nav from "./components/navigation/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPages/Home";
import AppContext from "./context/AppContext";
import Login from "./pages/Auth/Login"
import LandingPage from "./pages/LandingPages/LandingPage";
function App() {
  return (
    <AppContext>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;

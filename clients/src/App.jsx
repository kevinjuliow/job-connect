import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/Login"
import LandingPage from "./pages/LandingPages/LandingPage"
import Explore from "./pages/ExplorePages/Explore"
// import Profile from "./pages/ProfilePages/Profile"
import Signup from "./pages/Auth/Signup"
import User from "./pages/UserPages/User"
import Company from "./pages/Companypages/Company"
// import Mailbox from "./pages/ExplorePages/Mailbox"
import JobDetail from "./pages/ExplorePages/JobDetail"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <LandingPage />} />
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/applicants/explore" element={<Explore/>} />
          <Route path="/company" element={<Company/>} />
          {/* <Route path="/profile" element={<Profile/>} /> */}
          <Route path="/applicants/profile" element={<User/>} />
          {/* <Route path="/applicants/mailbox" element={<Mailbox/>} /> */}
          {/* <Route path="/profile/settings" element={<User/>} /> */}
          <Route path="/applicants/job/detail/:jobId" element={<JobDetail/>} />
        </Routes>
      </Router>
    </>
   
  );
}

export default App;

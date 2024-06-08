import './App.css';
import Nav from './components/navigation/Nav';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

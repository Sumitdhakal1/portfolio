
import './App.css';
import Navbar from './pages/Navbar';
import Home  from './pages/home';
import Features from './pages/features';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar exact to='/Home'> Home</Navbar>
      <Home/>
      <Features/>
      <Portfolio/>
      <Resume/>
     <Routes>
        <Route  path='/Home' element={<Home/>}/>
        </Routes>
    </Router>

  );
}

export default App;

import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import './index.css'; 

function App() {
  return (
    <div style={{ textAlign: 'center',color:'gray' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

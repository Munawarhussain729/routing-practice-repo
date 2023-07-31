import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      
      <Navbar />
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
     
      
    </div>
  );
}

export default App;

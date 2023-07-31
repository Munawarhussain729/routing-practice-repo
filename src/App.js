import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav1 from './components/navbar'
import About from './components/About';
import Contact from './components/ContactUs';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Nav1 />
      
      <Routes>
          <Route path="/about" element= {<About />}>
          </Route>
          <Route path="/contact" element = {<Contact />}>
          </Route>
          <Route path='/home' element = {<Home />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

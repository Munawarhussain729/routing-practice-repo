import Navbar from './comp/Navbar.js';
import About from './comp/About.js'
import Contact from './comp/Contact.js'
import Works from './comp/Works.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {



  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
 <Routes>
  <Route exact path="/about" element={<About/>}/>
  <Route exact path="/works" element={<Works/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
 </Routes>
</BrowserRouter>
      
    </div>
    
  );
}


export default App;
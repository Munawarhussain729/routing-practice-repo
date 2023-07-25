
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />




        </Routes>



      </BrowserRouter>





    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      <h className="header" style={{ fontSize: "25px" }}>navbar</h>
      <nav>
        <Link to='/about' className='btn' style={{ marginLeft: "70%", fontSize: "20px" }}>ABOUT</Link>
        <Link to='/works' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>WORKS</Link>
        <Link to='/contact' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>CONTACT</Link>
      </nav>
    </div>
  );
}

export default Navbar;
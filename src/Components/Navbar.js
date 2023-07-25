import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './../logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className='Nav' to="/">Navbar</Link>
            
            <div className='fields'>
                <Link className='HOVER' to="/">Home</Link>
                <Link className='HOVER' to="/about">About</Link>
                <Link className='HOVER3' to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar

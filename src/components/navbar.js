import React from 'react'
import {Link} from 'react-router-dom'; 
import './navbar.css'
const Nav1 = () => 
{
    return(
    <>
    <nav className='navbar'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
    </nav>
    </>
    )
}

export default Nav1;
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () =>
{
  return(
    <div className='navcontainer'>
    <p><Link to="/" className='navItems'> Home</Link></p>
    <p><Link to="/AddRecipe" className='navItems'> AddRecipe</Link></p>
    </div>
  )
  
}

export default Navbar;
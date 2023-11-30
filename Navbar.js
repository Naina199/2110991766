import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav>
    <Link to='/' style={{ textDecoration: "none", color: "white", backgroundColor: "#8128a7",marginTop:"20px" }} className='listitemnew'>Home</Link>
    <Link to='/about' style={{ textDecoration: "none", color: "white", backgroundColor: "#8128a7" }} className='listitemnew1'>About</Link>
    <Link to='/login' style={{ textDecoration: "none", color: "white", backgroundColor: "#8128a7" }} className='listitemnew1'>Log in</Link>
    <Link to='/signup' style={{ textDecoration: "none", color: "white", backgroundColor: "#8128a7" }} className='listitemnew1'>Register</Link>
    </nav>
    </>
  )
}

export default Navbar
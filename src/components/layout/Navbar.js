import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './Navbar.css'

const Navbar = ()=>{
    return (
        <nav className="nav-bar">
            <div className="container">
                <Link to='/' className="brand-logo nav-item">Manager</Link>
                <SignedOutLinks className="nav-item"/>
                <SignedInLinks className="nav-item"/>
                
            </div>
            
        </nav>

    )
}

export default Navbar
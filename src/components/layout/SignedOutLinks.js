import React from 'react'
import { NavLink } from 'react-router-dom'
import './SignedInLinks.css'

const SignedOutLinks = ({className})=>{
    return (
        <ul className="nav-item">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Log in</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
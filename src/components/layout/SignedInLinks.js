import React from 'react'
import { NavLink } from 'react-router-dom'
import './SignedInLinks.css'

const SignedInLinks = ({className})=>{
    return (
        <ul className={className}>
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' class="circle">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
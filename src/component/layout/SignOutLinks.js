import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
    
    return (
        <div>
            <ul className="right">
                <li>
                    <NavLink className="btn btn-panel blue lighten-1" to='/signin'>Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SignOutLinks
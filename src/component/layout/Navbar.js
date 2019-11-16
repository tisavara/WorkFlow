import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignInLinks from './SignInLinks'
import './Navbar.css'
import SignOutLinks from './SignOutLinks'
import MainManu from './mainManu'

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ?<div><SignInLinks profile={profile} /><MainManu /></div> : <SignOutLinks />

    return (
        <nav className="nav-panel grey lighten-5 z-depth-1">
            <div className="container">
                <Link to='/' className="brand-logo">
                <img src="https://common-goods.pttbsa.com/images/BSA.png" className="Nav-logo" alt="Cinque Terre" />
                </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
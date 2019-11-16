import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { deletemem } from '../../store/actions/authActions'
import './Navbar.css'

const SignInLinks = (props) => {
    const { auth, profile } = props

    if(profile.status != 'Admin'){
        return (
            <div>
                <ul className="right">
                    <li>
                        <NavLink className="btn white" to='/create'>
                            <i className="update"></i>
                        </NavLink>
                    </li>
                    <li>
                        <div style={{width: 150}} ><NavLink className="btn btn-floating blue lighten-1"to='/'> 
                        { props.profile.initials } </NavLink></div>
                        <div className="dropdown1">
                            <Link to='/editprofile' className="dropdownlist1">edit profile</Link>
                            <a className="dropdownlist1" onClick={ (e) => {
                                if(window.confirm('คุณแน่ใจหรือไม่ที่จะลบบัญชีนี้ออกไป คุณจะไม่สามารถกลับเข้ามาใช้ได้อีกครั้ง')) {
                                    e.preventDefault()
                                    props.deletemem(auth.uid)
                                }
                            }} >
                                Delete account 
                            </a>
                            <div className="divider"></div>
                            <a className="dropdownlist1" onClick={ props.signOut }>Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }else {
        return (
            <div>
                <ul className="right">
                    <li>
                        <NavLink className="btn white" to='/create'>
                            <i className="update"></i>
                        </NavLink>
                    </li>
                    <li>
                        <div style={{width: 150}} ><NavLink className="btn btn-floating blue lighten-1"to='/'> 
                        { props.profile.initials } </NavLink></div>
                        <div className="dropdown1">
                            <Link to='/setting' className="dropdownlist1">Setting</Link>
                            <Link to='/editprofile' className="dropdownlist1">edit profile</Link>
                            <a className="dropdownlist1" onClick={ (e) => {
                                if(window.confirm('คุณแน่ใจหรือไม่ที่จะลบบัญชีนี้ออกไป คุณจะไม่สามารถกลับเข้ามาใช้ได้อีกครั้ง')) {
                                    e.preventDefault()
                                    props.deletemem(auth.uid)
                                }
                            }} >
                                Delete account 
                            </a>
                            <div className="divider"></div>
                            <a className="dropdownlist1" onClick={ props.signOut }>Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
        deletemem: (memid) => dispatch(deletemem(memid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)
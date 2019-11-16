import React from 'react'
import { NavLink } from 'react-router-dom'
import MemberLinks from './MemberLinks'
import { connect } from 'react-redux'

const MainManu = (props) => {
    
    const { profile } = props
    if (profile.status == 'User') {
        return (
            <div className="navleft">
            <ul>
                <li><NavLink className="blue-text text-darken-2" to='/download'>Download PDf</NavLink></li>
                <li><NavLink className="blue-text text-darken-2" to='/now'>สาขาที่เปิดปัจจุบัน</NavLink></li>
                <li><NavLink className="blue-text text-darken-2" to='/close'>สาขาที่ปิด</NavLink></li>
                <li>
                    <NavLink className="blue-text text-darken-2" to='/'>Manu</NavLink>
                        <div className="dropdown1">
                            <NavLink to='/open' className="dropdownlist1">เปิดสาขา</NavLink>
                            <NavLink to='/manageproject' className="dropdownlist1">จัดการสาขา</NavLink>
                        </div>
                </li>
            </ul>
        </div>
        )
    }else if (profile.status == 'Accout' || profile.status == 'Insure'){
        return (
            <div className="navleft">
                <ul>
                    <li><NavLink className="blue-text text-darken-2" to='/accountmanage'>จัดการสาขา</NavLink></li>
                    <li><NavLink className="blue-text text-darken-2" to='/download'>Download PDf</NavLink></li>
                    <li><NavLink className="blue-text text-darken-2" to='/close'>สาขาที่ปิด</NavLink></li>
                </ul>
            </div>
        )
    }else {
        return (
        <div className="navleft">
            <ul>
                <li><NavLink className="blue-text text-darken-2" to='/download'>Download PDf</NavLink></li>
                <li><NavLink className="blue-text text-darken-2" to='/now'>สาขาที่เปิดปัจจุบัน</NavLink></li>
                <li><NavLink className="blue-text text-darken-2" to='/close'>สาขาที่ปิด</NavLink></li>
                <li>
                    <NavLink className="blue-text text-darken-2" to='/'>Manu</NavLink>
                        <div className="dropdown1">
                            <NavLink to='/open' className="dropdownlist1">เปิดสาขา</NavLink>
                            <NavLink to='/manageproject' className="dropdownlist1">จัดการสาขา</NavLink>
                            <MemberLinks />
                        </div>
                </li>
            </ul>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(MainManu)
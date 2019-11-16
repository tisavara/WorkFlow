import React from 'react'
import { NavLink } from 'react-router-dom'

const MemberLinks = () => {
    return (
        <div>
            <div className="divider"></div>
            <NavLink className="dropdownlist1" to='/managemember'>จัดการสมาชิก</NavLink>
        </div>
    )
}

export default MemberLinks
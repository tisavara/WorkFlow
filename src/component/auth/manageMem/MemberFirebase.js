import React from 'react'
import { Link } from "react-router-dom";

const MemFirebase = (props) => {
    const {user} = props
    return (
        <tr>
            <td> { user.titleThai } { user.firstThai } { user.lastThai } </td>
            <td> { user.title } { user.firstName } { user.lastName }  </td>
            <td> { user.Id } </td>
            <td> { user.position } </td>
            <td> { user.tel } </td>
            <td> { user.status } </td>
            <td>
                <Link to={"/editmem/" + user.id} key={user.id} >
                <button class="btn orange darken-2 right" type="submit" name="action" >
                    <i class="material-icons left">edit</i>แก้ไข
                </button>
                </Link>
            </td>
        </tr>
    )
}

export default MemFirebase
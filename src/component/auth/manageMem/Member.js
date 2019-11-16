import React, { Component } from 'react'
import MemFirebase from './MemberFirebase'

class Member extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                <div  className="card-panel hoverable" >
                    <h3>พนักงานทั้งหมด</h3>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>ชื่อ-สกุล</th>
                                <th>Name-Surname</th>
                                <th>รหัสพนักงาน</th>
                                <th>ตำแหน่ง</th>
                                <th>เบอร์โทรศัพท์</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        { users && users.map(user => {
                            return (
                               <MemFirebase user={user} key={user.id} />
                            )
                        }) }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Member
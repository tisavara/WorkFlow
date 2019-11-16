import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class AccountManage extends Component {
    render() {
        return (
            <div className="container">
                <h3>จัดการสาขา</h3>
                <div className="row">
                    <div className="col s12 m6">
                        <h5 className="center">สาขาที่ต้องเปิดเลข Cost center</h5>
                    </div>
                    <div className="col s12 m6">
                        <h5 className="center">สาขาที่เปิด Cost center แล้ว</h5>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {}
}

const mapDispatchToProps = (dicpatch) => {
    return {}
}

export default compose( firestoreConnect([{ collection: 'branchs' }]), connect(mapStateToProps, mapDispatchToProps))(AccountManage)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import AccountDetail from './AccountDetail'
import { Redirect } from "react-router-dom";

class AccountManage extends Component {
    state = {
        branchId: ''
    }
    render() {
        const history = this.props.history
        const { branchs, auth, profile } =  this.props
        let title1 = <h5 className="center">สาขาที่ต้องเปิดเลข Cost center</h5>
        let title2 = <h5 className="center">สาขาที่เปิดเลข Cost center แล้ว</h5>
        if (!auth.uid) return <Redirect to="/signin" />

        if (branchs) {
            if (profile.status != 'Accout') return <Redirect to="/" />
            return (
                <div className="container">
                    <h3>จัดการสาขา</h3>
                    <div className="row">
                        <div className="col s4">
                            {  title1 }
                            { branchs && branchs.map((branch, i) => {
                                if (branch.statusCost && branch.statusCost !== 'Success') {
                                    let Status
                                    let style = 'red'
                                    if (branch.statusCost === 'noCost') {
                                        Status = "ยังไม่ได้เปิดเลข Cost center"
                                    }else if (branch.statusCost === 'sendCost') {
                                        Status = "เลข Cost center ยังใช้ไม่ได้"
                                    }
                                    return (
                                        <div className="inputGroup">
                                            <input id={branch.Branch.Name} name="option" type="radio" onClick={() => {
                                                this.setState({branchId: branch.id})
                                            }} />
                                            <label for={branch.Branch.Name}>
                                                <span className="left">{i}. {branch.Branch.Name}</span>
                                                <span className="right" style={{ marginRight: 40, color: style, fontSize: 13 }}>{Status}</span>
                                            </label>
                                        </div>
                                    )
                                }
                            }) }
                        </div>
                        <div className="col s4">
                        { title2 }
                            { branchs && branchs.map((branch, i) => {
                                if (branch.statusCost === 'Success') {
                                    return (
                                        <div className="inputGroup">
                                            <input id={branch.Branch.Name} name="option" type="radio" onClick={() => {
                                                this.setState({branchId: branch.id})
                                            }} />
                                            <label for={branch.Branch.Name}>
                                                <span className="left">{i}. {branch.Branch.Name}</span>
                                                <span className="right" style={{ marginRight: 40, color: 'green', fontSize: 13 }}>สำเร็จ</span>
                                            </label>
                                        </div>
                                    )
                                }
                            }) }
                        </div>
                        <div className="col s4">
                            <h5 className="center">สถานะ</h5>
                            <AccountDetail ID={this.state.branchId} history={history} profile={profile} />
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="container center">
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                      <div class="circle-clipper left">
                        <div class="circle"></div>
                      </div>
                      <div class="gap-patch">
                        <div class="circle"></div>
                      </div>
                      <div class="circle-clipper right">
                        <div class="circle"></div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        branchs: state.firestore.ordered.branchs,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }]), connect(mapStateToProps))(AccountManage)
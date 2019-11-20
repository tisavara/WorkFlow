import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReactToPrint from "react-to-print";
import moment from "moment";
import { sendTel, sendViceTel } from '../../../store/actions/docAction'

class Telephone extends Component {
    state = {
        content: 'เบิกโทรศัพท์',
        checkname: '',
        err: ''
    }
    render() {
        const { branch, user, vice, email } = this.props
        const name = this.props.match.params.name
        const id = this.props.match.params.id

        let button
        let icon
        let check
        if (name === 'tel') {
            button = "Send"
            icon = "send"
            check = " "
        }else if (name === "download") {
            button = "Download"
            icon = "file_download"
            check = " "
        }else if (name === "check") {
            button = "Checked"
            icon = "check_circle"
            check = <div className="col"><input placeholder="ลงนามอนุมัติ" onChange={(e) => {this.setState({checkname: e.target.value})}} /></div>
        }
        
        if(branch && user && vice && email) {
            return (
                <div>
                    <Tel branch={branch} user={user} vice={vice} ref={el => (this.teltoprint = el)} />
                    <div className="container row">
                        <span style={{color: 'red'}} className="left">{ this.state.err }</span> { check }
                        <div className="col">
                            <ReactToPrint trigger={() => 
                            <button class="waves-effect waves-light btn">
                                <i class="material-icons left">{icon}</i>{button}
                            </button>}
                            content={() => this.teltoprint}
                            onAfterPrint={() => {
                                this.setState({
                                    branchId: id,
                                    email: vice.email,
                                    name: user.titleThai + ' ' + user.firstThai + ' ' + user.lastThai,
                                    business: branch.Branch.Type.label,
                                    branchName: branch.Branch.Name,
                                    Cost: branch.Branch.Cost
                                }, () => {
                                    if (name === 'tel') {
                                        this.props.sendTel(this.state)
                                        this.props.history.goBack()
                                    }else if (name === "download") {
                                        this.props.history.goBack()
                                    }else if (name === "check") {
                                        if (this.state.checkname === vice.firstThai) {
                                            this.setState({
                                                content: 'เบิกโทรศัพท์ บท.',
                                                branchId: id,
                                                email: email.emailBT,
                                                name: user.titleThai + ' ' + user.firstThai + ' ' + user.lastThai,
                                                business: branch.Branch.Type.label,
                                                branchName: branch.Branch.Name,
                                                Cost: branch.Branch.Cost
                                            }, () => {
                                                this.props.sendViceTel(this.state)
                                                this.props.history.goBack()
                                            })
                                        }else {
                                            this.setState({
                                                err: 'ผิดพลาด! กรุณากรอกเพียงชื่อจริง'
                                            })
                                        }
                                    }
                                })
                            }}
                             />
                        </div>
                        <div className="col">
                            <button
                            class="waves-effect waves-light btn red"
                            onClick={() => {
                                this.props.history.goBack()
                            }}
                            >
                            <i class="material-icons left">cancel</i>Cancel
                            </button>
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
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const ID = ownProps.match.params.id
    const branchs = state.firestore.data.branchs
    const branch = branchs ? branchs[ID]: null

    const userId = branch ? branch.Users.Id: null
    const users = state.firestore.data.users
    const user = users ? users[userId]: null

    const viceId = branch ? branch.Vice: null
    const vices = state.firestore.data.vice
    const vice = vices ? vices[viceId]: null

    const emailId = '8NzZ9Eb49NNUJZ6OuYtY'
    const emails = state.firestore.data.email
    const email = emails ? emails[emailId]: null
    return {
        branch: branch,
        user: user,
        vice: vice,
        email: email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendTel: (detail) => dispatch(sendTel(detail)),
        sendViceTel: (detail) => dispatch(sendViceTel(detail))
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }, { collection: 'users' }, { collection: 'email' }, { collection: 'vice' }]), connect(mapStateToProps, mapDispatchToProps))(Telephone)

class Tel extends Component {
    render() {
        const date = moment(new Date().toLocaleString()).format("L")
        const { branch, user, vice } = this.props
        return (
            <div>
                <img src={require("../../../image/tel.jpg")} width="1000" />
                <span style={{ position: "absolute", top: 55, left: 210, fontSize: 15 }}>
                    ธคป.
                </span>
                <span style={{ position: "absolute", top: 55, left: 650, fontSize: 15 }}>
                    { date }
                </span>
                <span style={{ position: "absolute", top: 85, left: 190, fontSize: 25, letterSpacing: 15 }}>
                    { branch.Branch.Cost }
                </span>
                <span style={{ position: "absolute", top: 425, left: 120, fontSize: 20 }}>
                    1.
                </span>
                <span style={{ position: "absolute", top: 425, left: 160, fontSize: 20 }}>
                    โทรศัพท์
                </span>
                <span style={{ position: "absolute", top: 425, left: 625, fontSize: 20 }}>
                    1
                </span>
                <span style={{ position: "absolute", top: 795, left: 530, fontSize: 20 }}>
                    { user.titleThai } { user.firstThai } { user.lastThai }
                </span>
                <span style={{ position: "absolute", top: 1150, left: 300, fontSize: 20 }}>
                    ผู้จัดการฝ่าย
                </span>
            </div>
        )
    }
}
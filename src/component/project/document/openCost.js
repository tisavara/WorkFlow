import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import ReactToPrint from "react-to-print";
import { sendCost } from '../../../store/actions/docAction'

class openCost extends Component {
    state = {
        content: 'เปิด Cost center',
        checkname: '',
        err: ''
    }
    render() {
        const { branch, user, email, profile } = this.props
        const name = this.props.match.params.name
        const id = this.props.match.params.id
        
        let button
        let icon
        let check
        if (name === "download") {
            button = "Download"
            icon = "file_download"
            check = " "
        }else if (name === "check") {
            button = "checked"
            icon = "check_circle"
            check = <div className="col"><input placeholder="ลงชื่อ" onChange={(e) => {this.setState({checkname: e.target.value})}} /></div>
        }

        if (branch && user && email) {
            return (
                <div>
                    <Cost branch={ branch } user={ user } ref={el => (this.opentoprint = el)} />
                    <div className="container row">
                        <span style={{color: 'red'}} className="left">{ this.state.err }</span> { check }
                        <div className="col">
                            <ReactToPrint trigger={() => 
                            <button class="waves-effect waves-light btn">
                                <i class="material-icons left">{ icon }</i>{ button }
                            </button>} 
                            content={() => this.opentoprint}
                            onAfterPrint={() => {
                                this.setState({
                                    branchId: id,
                                    email: email.emailShared,
                                    name: user.titleThai + ' ' + user.firstThai + ' ' + user.lastThai,
                                    business: branch.Branch.Type.label,
                                    branchName: branch.Branch.Name,
                                    Cost: branch.Branch.Cost
                                }, () => {
                                    if (name === "download") {
                                        this.props.history.goBack()
                                    }else if (name === "check") {
                                        if (this.state.checkname === profile.firstThai) {
                                            this.props.sendCost(this.state)
                                            this.props.history.push('/accountmanage')
                                        }else {
                                            this.setState({
                                                err: 'ชื่อผิด'
                                            })
                                        }
                                    }
                                })
                            }}
                            />
                        </div>
                        <div className="col">
                            <button class="waves-effect waves-light btn red" onClick={() => {
                                this.props.history.goBack()
                            }}>
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

    const emailId = '8NzZ9Eb49NNUJZ6OuYtY'
    const emails = state.firestore.data.email
    const email = emails ? emails[emailId]: null
    return {
        branch: branch,
        user: user,
        email: email,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      sendCost: (detail) => dispatch(sendCost(detail))
    }
  }

export default compose(firestoreConnect([{ collection: 'branchs' }, { collection: 'users' }, { collection: 'email' }]), connect(mapStateToProps, mapDispatchToProps))(openCost)

class Cost extends Component {
    render() {
        const { branch, user } = this.props
        const date = moment(new Date().toLocaleString()).format("L")
        const cost = branch.Branch.Cost
        return (
            <div>
                <img src={require("../../../image/openCost.png")} width="1000" />
                <span style={{ position: "absolute", top: 125, left: 350, fontSize: 15 }}>
                    { cost[0] }{ cost[1] }
                </span>
                <span style={{ position: "absolute", top: 155, left: 310, fontSize: 15 }}>
                    { branch.Branch.Type.label }
                </span>
                <span style={{ position: "absolute", top: 282, left: 258, fontSize: 30, letterSpacing: 6 }}>
                    { cost }
                </span>
                <span style={{ position: "absolute", top: 378, left: 300, fontSize: 15 }}>
                    { branch.Branch.Name }
                </span>
                <span style={{ position: "absolute", top: 378, left: 700, fontSize: 15 }}>
                    { branch.Branch.Name }
                </span>
                <span style={{ position: "absolute", top: 415, left: 280, fontSize: 30, letterSpacing: 8 }}>
                    { date[3] + date[4] }
                </span>
                <span style={{ position: "absolute", top: 415, left: 345, fontSize: 30, letterSpacing: 8 }}>
                    { date[0] + date[1] }
                </span>
                <span style={{ position: "absolute", top: 415, left: 410, fontSize: 30, letterSpacing: 7 }}>
                    { date[6] + date[7] + date[8] + date[9] }
                </span>
                <span style={{ position: "absolute", top: 510, left: 280, fontSize: 15 }}>
                    { user.titleThai } { user.firstThai } { user.lastThai }
                </span>
                <span style={{ position: "absolute", top: 510, left: 700, fontSize: 15 }}>
                    { user.position }
                </span>
                <span style={{ position: "absolute", top: 555, left: 290, fontSize: 15 , letterSpacing: 5}}>
                    { cost[0] + cost[1] + cost[2] + cost[3] + cost[4] }
                </span>
                <span style={{ position: "absolute", top: 555, left: 700, fontSize: 15 }}>
                    { branch.Branch.Type.label }
                </span>
                <span style={{ position: "absolute", top: 600, left: 320, fontSize: 15 , letterSpacing: 5}}>
                    01
                </span>
                <span style={{ position: "absolute", top: 580, left: 635, fontSize: 30 , letterSpacing: 6}}>
                    { cost }
                </span>
            </div>
        )
    }
}
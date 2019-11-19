import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReactToPrint from "react-to-print";
import moment from "moment";

class Insurance extends Component {
    state = {
        content: 'ทำประกันสาขาใหม่'
    }
    render() {
        const { branch, user, vice } = this.props

        const name = this.props.match.params.name
        let button
        let icon
        if (name == "insure") {
        button = "Send"
        icon = "send"
        }else if (name == "download") {
        button = "Download"
        icon = "file_download"
        }

        if(branch && user && vice) {
            return (
                <div>
                    <InsureToPrint branchs={branch} user={user} vice={vice} ref={el => (this.insureToPrint = el)} />
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ReactToPrint 
                                trigger={() => 
                                    <button class="waves-effect waves-light btn">
                                        <i class="material-icons left">{icon}</i>{button}
                                    </button>
                                }
                                content={() => this.insureToPrint}
                                onAfterPrint={() => {
                                    this.props.history.goBack()
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
    const users = userId ? state.firestore.data.users: null
    const user = users ? users[userId]: null

    const viceId = branch ? branch.Vice: null
    const vices = viceId ? state.firestore.data.vice: null
    const vice = vices ? vices[viceId]: null
    return {
        branch: branch,
        user: user,
        vice: vice
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }, { collection: "users" }, { collection: "email" }, { collection: 'vice' }]), connect(mapStateToProps))(Insurance)

class InsureToPrint extends Component {
    render() {
        const { branchs, user, vice } = this.props
        let top
        let left
        let name = ' '

        if (branchs.Branch.Type.label == 'สถานีน้ำมัน') {
            top = 245
            left = 590
        }else if (branchs.Branch.Type.label == 'NGV') {
            top = 245
            left = 725
        }else if (branchs.Branch.Type.label == 'Fit auto') {
            top = 245
            left = 860
        }else if (branchs.Branch.Type.label == 'Cafe Amazon') {
            top = 293
            left = 590
        }else if (branchs.Branch.Type.label == '7-Eleven') {
            top = 293
            left = 725
        }else {
            top = 293
            left = 860
            name =branchs.Branch.Type.label
        }

        return (
            <div>
                <img src={require("../../../image/insurance.jpg")} width="1000" />
                <span style={{ position: "absolute", top: 125, left: 60, fontSize: 15 }}>
                    {user.titleThai} {user.firstThai} {user.lastThai} 
                </span>
                <span style={{ position: "absolute", top: 125, left: 400, fontSize: 15 }}>
                    {user.position}
                </span>
                <span style={{ position: "absolute", top: 125, left: 580, fontSize: 15 }}>
                    {user.tel}
                </span>
                <span style={{ position: "absolute", top: 118, left: 800, fontSize: 20, letterSpacing: 13 }}>
                    {user.Id}
                </span>
                <span style={{ position: "absolute", top: top, left: left,}}>
                    <i className="material-icons">check</i>
                </span>
                <span style={{ position: "absolute", top: 293, left: 910, fontSize: 15 }}>
                    {}
                </span>
                <span style={{ position: "absolute", top: 333, left: 655}}>
                    <i className="material-icons">check</i>
                </span>
                <span style={{ position: "absolute", top: 400, left: 650, fontSize: 15 }}>
                    {branchs.Branch.Name}
                </span>
                <span style={{ position: "absolute", top: 440, left: 550, fontSize: 15 }}>
                    เปิดบริการวันที่  { moment(branchs.Branch.createAt.toDate().toString()).format("LL")}
                </span>
                <span style={{ position: "absolute", top: 483, left: 550, fontSize: 15 }}>
                    วงเงินประกัน  {branchs.Branch.Limit}  บาท/วัน
                </span>
                <span style={{ position: "absolute", top: 523, left: 550, fontSize: 15 }}>
                    {user.titleThai} {user.firstThai} {user.lastThai} / เบอร์โทร {user.tel}
                </span>
                <span style={{ position: "absolute", top: 595, left: 618, fontSize: 20, letterSpacing: 13 }}>
                    {branchs.Branch.Cost}
                </span>
                <span style={{ position: "absolute", top: 875, left: 230}}>
                    <i className="material-icons">check</i>
                </span>
                <span style={{ position: "absolute", top: 910, left: 437}}>
                    <i className="material-icons">check</i>
                </span>
                <span style={{ position: "absolute", top: 1090, left: 70}}>
                    {user.titleThai} {user.firstThai} {user.lastThai}
                </span>
                <span style={{ position: "absolute", top: 1135, left: 70}}>
                    {user.titleThai} {user.firstThai} {user.lastThai}
                </span>
                <span style={{ position: "absolute", top: 1175, left: 100}}>
                    {user.position}
                </span>
                <span style={{ position: "absolute", top: 1210, left: 100}}>
                    {moment(new Date().toLocaleString()).format("L")}
                </span>
                <span style={{ position: "absolute", top: 1135, left: 400}}>
                    {vice.title.label} {vice.Thainame} {vice.Thaisurname}
                </span>
                <span style={{ position: "absolute", top: 1175, left: 440}}>
                    ผู้จัดการฝ่าย
                </span>
                <span style={{ position: "absolute", top: 1135, left: 730}}>
                    นาย สุรัส พุฒยางกูร
                </span>
                <span style={{ position: "absolute", top: 1175, left: 760}}>
                    รคป.
                </span>
            </div>
        )
    }
}
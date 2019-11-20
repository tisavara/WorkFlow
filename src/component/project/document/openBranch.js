import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import ReactToPrint from "react-to-print";
import { sendEmail } from '../../../store/actions/docAction'

class openBranch extends Component {
  state = {
    content: 'เปิดสาขา',
    checkname: '',
    err: ''
  }
  render() {
    const { branch, user, email, profile } = this.props;
    const name = this.props.match.params.name
    const id = this.props.match.params.id

    let button
    let icon
    let check
    if (name === "open") {
      button = "Send"
      icon = "send"
      check = " "
    }else if (name === "download") {
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
          <OpenToPrint branch={branch} user={user} ref={el => (this.opentoprint = el)} />
          <br />
          <div className="container">
            <div className="row">
              <span style={{color: 'red'}} className="left">{ this.state.err }</span> { check }
              <div className="col">
                <ReactToPrint 
                  trigger={() => 
                    <button class="waves-effect waves-light btn">
                      <i class="material-icons left">{icon}</i>{button}
                    </button>
                  }
                  content={() => this.opentoprint}
                  onAfterPrint={() => {
                    this.setState({
                      branchId: id,
                      email: email.emailAccount,
                      name: user.titleThai + ' ' + user.firstThai + ' ' + user.lastThai,
                      business: branch.Branch.Type.label,
                      branchName: branch.Branch.Name,
                      Cost: branch.Branch.Cost
                    }, () => {
                      if (name === "open") {
                        this.props.sendEmail(this.state) 
                        this.props.history.goBack()
                      }else if (name === "download") {
                        this.props.history.goBack()
                      } else if (name === "check") {
                        if (this.state.checkname === profile.firstThai) {
                          this.props.history.push('/docopencost/' + 'check/' + id)
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
          <br />
        </div>
      );
    } else {
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
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const branchs = state.firestore.data.branchs;
  const branch = branchs ? branchs[id] : null;

  const Bch = branch ? branch.Users.Id : null;
  const users = Bch ? state.firestore.data.users : null;
  const user = users ? users[Bch] : null;

  const EID = '8NzZ9Eb49NNUJZ6OuYtY'
  const emails = state.firestore.data.email
  const email = emails ? emails[EID]: null
  return {
    branch: branch,
    user: user,
    email: email,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendEmail: (detail) => dispatch(sendEmail(detail))
  }
}

export default compose(
  firestoreConnect([{ collection: "branchs" }, { collection: "users" }, { collection: "email" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(openBranch);

class OpenToPrint extends Component {
  render() {
    const {branch, user} = this.props
    return (
      <div>
        <img src={require("../../../image/openBranch.jpg")} width="1000" />
          <span
            style={{ position: "absolute", top: 215, left: 200, fontSize: 15 }}
          >
            ธคป.
          </span>
          <span
            style={{ position: "absolute", top: 215, left: 530, fontSize: 15 }}
          >
            {user.titleThai} {user.firstThai} {user.lastThai}
          </span>
          <span
            style={{ position: "absolute", top: 215, left: 800, fontSize: 15 }}
          >
            {user.tel}
          </span>
          <span
            style={{ position: "absolute", top: 330, left: 250, fontSize: 15 }}
          >
            เปิดสาขา
          </span>
          <span
            style={{ position: "absolute", top: 380, left: 200, fontSize: 15 }}
          >
            รหัสสาขา {branch.Branch.Code} / {branch.Branch.Name}
          </span>
          <span
            style={{ position: "absolute", top: 527, left: 200, fontSize: 15 }}
          >
            {moment(new Date().toLocaleString()).format("lll")}
          </span>
          <span
            style={{ position: "absolute", top: 577, left: 200, fontSize: 15 }}
          >
            ผู้จัดการเขต {user.titleThai} {user.firstThai} {user.lastThai}
          </span>
          <span
            style={{ position: "absolute", top: 675, left: 230, fontSize: 15 }}
          >
            {user.titleThai} {user.firstThai} {user.lastThai}
          </span>
          <span
            style={{ position: "absolute", top: 705, left: 260, fontSize: 12 }}
          >
            {moment(new Date().toLocaleString()).format("L")}
          </span>
      </div>
    )
  }
}
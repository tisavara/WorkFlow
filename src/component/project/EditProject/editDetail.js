import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deletebranch } from "../../../store/actions/openAction";
import { Link } from "react-router-dom";

class EditDetail extends Component {
  state = {
    Id: "",
    Name: "",
    Cost: "",
    Business: "",
    Address: "",
    User: "",
    openDate: ""
  };
  render() {
    const user = this.props.user
    const branch = this.props.branch;
    let Branchlogo
    if (branch.Branch.Type.label == "Fit auto") {
      Branchlogo = "https://kasikornbank.com/th/promotion/PublishingImages/PTT/logo-fit-auto.png"
    }else if (branch.Branch.Type.label == "สถานีน้ำมัน") {
      Branchlogo = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/PTT_Public_Company_logo.svg/1200px-PTT_Public_Company_logo.svg.png"
    }else if (branch.Branch.Type.label == "NGV") {
      Branchlogo = "https://nis.pttplc.com/nis/images/pttlogo.png"
    }else if (branch.Branch.Type.label == "7-Eleven") {
      Branchlogo = "https://seeklogo.com/images/1/7-Eleven-logo-08AAB4F0FE-seeklogo.com.png"
    }else if (branch.Branch.Type.label == "Cafe Amazon") {
      Branchlogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV8tvldewaTAdIVuq72k26yJj7r9l4z85rPh-qD9x1Io4Sdtf&s"
    }else if (branch.Branch.Type.label == "ฮั่วเช่งฮง") {
      Branchlogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkm6OVRgTxS0yq8XMrJya4mQOpk0IfGMT1dHGPmh-0Qn8DmbH&s"
    }else if (branch.Branch.Type.label == "Daddy dough") {
      Branchlogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjctozRMRjUD5N_9UwDcLyWpAqdAI9KsI9mBNh9-_ujv6yvke7&s"
    }
    return (
      <tr>
        <td><img src={Branchlogo} style={{ height: 50 }} /></td>
        <td> {branch.Branch.Cost} </td>
        <td> {branch.Branch.Type.label} </td>
        <td> {branch.Branch.Name} </td>
        <td> {user.titleThai} {user.firstThai} {user.lastThai} </td>
        <td>
          {branch.Address.Address1} {branch.Address.Address2}
        </td>
        <td>
          <button
            className="btn red"
            onClick={e => {
              e.preventDefault();
              if (
                window.confirm(
                  "คุณแน่ใจแล้วหรือไม่ที่จะลบสาขา " +
                    branch.Branch.Name +
                    " ออก"
                )
              ) {
                this.setState(
                  {
                    Id: branch.id,
                    Name: branch.Branch.Name,
                    Cost: branch.Branch.Cost,
                    Business: branch.Branch.Type.label,
                    Address: branch.Address.Address1 + branch.Address.Address2,
                    User: branch.Users.Id,
                    openDate: branch.Branch.createAt
                  },
                  () => {
                    console.log(this.state)
                    this.props.deletebranch(this.state);
                  }
                );
              }
            }}
          >
            ปิดสาขา
          </button>
        </td>
        <td>
          <Link to={"/renovate/" + branch.id} key={branch.id}><button className="btn yellow accent-4 black-text">Renovate</button></Link>
        </td>
        <td>
          <Link to="/relocate"><button className="btn orange">Relocate</button></Link>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  const id = ownprops.branch.Users.Id
  const users = state.firestore.data.users
  const user = users ? users[id]: null
  const a = user ? user: ''
  return {
    user: a
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletebranch: branchid => dispatch(deletebranch(branchid))
  };
};

export default compose(firestoreConnect([{ collection: 'users' }]), connect(mapStateToProps,mapDispatchToProps))(EditDetail);

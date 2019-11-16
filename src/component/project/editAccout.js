import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import AddressFormTypeahead from "react-thailand-address-typeahead";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { updateProfile } from '../../store/actions/authActions'

class EditProfile extends Component {
  state = {
    id: "",
    title: "",
    firstThai: "",
    lastThai: "",
    firstname: "",
    lastname: "",
    tel: "",
    Address1: "",
    Address2: "",
    Address: ""
  };
  handleChang = (e) => {
      this.setState({
          title: e
      })
  }
  handleSubmit = (e) => {
      e.preventDefault()
      if (this.state.title == "") {
          if (this.state.Address2 == "") {
              this.setState({
                id: this.getID.value,
                Address1: this.getAddress1.value,
                firstname: this.getfirstname.value,
                lastname: this.getlastname.value,
                firstThai: this.getfirstthai.value,
                lastThai: this.getlastthai.value,
                tel: this.gettel.value,
                Address: this.getAddress.value,
                title: {
                    value: this.gettitle.value,
                    label: this.gettitleThai.value
                }
              }, () => {
                console.log(this.state)
                this.props.updateProfile(this.state)
              })
          }else {
            this.setState({
                id: this.getID.value,
                Address1: this.getAddress1.value,
                firstname: this.getfirstname.value,
                lastname: this.getlastname.value,
                firstThai: this.getfirstthai.value,
                lastThai: this.getlastthai.value,
                tel: this.gettel.value,
                Address: this.getAddress2.value,
                title: {
                    value: this.gettitle.value,
                    label: this.gettitleThai.value
                }
              }, () => {
                console.log(this.state)
                this.props.updateProfile(this.state)
              })
          }
      }else {
          if (this.state.Address2 == "") {
            this.setState({
                id: this.getID.value,
                Address1: this.getAddress1.value,
                firstname: this.getfirstname.value,
                lastname: this.getlastname.value,
                firstThai: this.getfirstthai.value,
                lastThai: this.getlastthai.value,
                tel: this.gettel.value,
                Address: this.getAddress.value
              }, () => {
                console.log(this.state)
                this.props.updateProfile(this.state)
              })
          }else {
            this.setState({
                id: this.getID.value,
                Address1: this.getAddress1.value,
                firstname: this.getfirstname.value,
                lastname: this.getlastname.value,
                firstThai: this.getfirstthai.value,
                lastThai: this.getlastthai.value,
                tel: this.gettel.value,
                Address: this.getAddress2.value
              }, () => {
                console.log(this.state)
                this.props.updateProfile(this.state)
              })
          }
      }
  }
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) {
        return <Redirect to="/signin" />;
      }
    return (
      <div className="container">
        <form className="card-panel hoverable" onSubmit={this.handleSubmit}>
          <h3>แก้ไขข้อมูลส่วนตัว</h3>
          <Select placeholder="คำนำหน้าชื่อ" options={title} onChange={this.handleChang} />
          <input type="hidden" value={profile.title} ref={(input) => this.gettitle = input} />
          <input type="hidden" value={profile.titleThai} ref={(input) => this.gettitleThai = input} />

          <div className="row">
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="newfirstThai" className="active">
                  ชื่อจริง
                </label>
                <input type="text" id="newfirstThai" defaultValue={profile.firstThai} ref={(input) => this.getfirstthai = input} />
                <input type="hidden" value={auth.uid} ref={(input) => this.getID = input} />
              </div>
            </div>
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="newlastThia" className="active">
                  นามสกุล
                </label>
                <input type="text" id="newlastThia" defaultValue={profile.lastThai} ref={(input) => this.getlastthai = input} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="newfirstName" className="active">
                  FirstName
                </label>
                <input type="text" id="newfirstName" defaultValue={profile.firstName} ref={(input) => this.getfirstname = input} />
              </div>
            </div>
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="newlastName" className="active">
                  lastName
                </label>
                <input type="text" id="newlastName" defaultValue={profile.lastName} ref={(input) => this.getlastname = input} />
              </div>
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="newtel" className="active">
              เบอร์โทรศัพท์
            </label>
            <input type="text" id="newtel" defaultValue={profile.tel} ref={(input) => this.gettel = input} />
          </div>

          <div className="divider"></div>

          <h3 className="">ที่อยู่</h3>
          <textarea id="Address1" defaultValue={profile.Address1} ref={(input) => this.getAddress1 = input} />
          <AddressFormTypeahead
            onAddressSelected={addressObject =>
              this.setState({
                Address2: addressObject
              })
            }
          />
          <input
            type="hidden"
            value={
              "ต." +
              this.state.Address2.d +
              " " +
              "อ." +
              this.state.Address2.a +
              " " +
              "จ." +
              this.state.Address2.p +
              " " +
              this.state.Address2.z
            }
            ref={input => (this.getAddress2 = input)}
          />
          <input type="hidden" value={profile.Address2} ref={(input) => this.getAddress = input} />
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Edit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: (profileid) => dispatch(updateProfile(profileid))
  };
};

export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditProfile);

const title = [
  { value: "Miss", label: "นางสาว" },
  { value: "Mrs", label: "นาง" },
  { value: "Mr", label: "นาย" }
];

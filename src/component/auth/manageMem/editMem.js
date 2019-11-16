import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import AddressFormTypeahead from "react-thailand-address-typeahead";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { updatemem } from "../../../store/actions/authActions";

class EditMem extends Component {
  state = {
    id: "",
    code: "",
    newfirstName: "",
    newlastName: "",
    newfirstThai: "",
    newlastThai: "",
    newposition: "",
    newtel: "",
    Address1: "",
    Address2: "",
    newtitles: "",
    status: ""
  };

  handleSelect1 = e => {
    this.setState({ newtitles: e });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newtitles == "") {
      if (this.state.Address2 == "") {
        if (this.state.status == "") {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress22.value,
              status: this.getStatus.value,
              newtitles: {
                value: this.gettitle.value,
                label: this.getthaititle.value
              }
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
              this.props.history.push("/managemember");
            }
          );
        } else {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress22.value,
              newtitles: {
                value: this.gettitle.value,
                label: this.getthaititle.value
              }
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
              this.props.history.push("/managemember");
            }
          );
        }
      } else {
        if (this.state.status == "") {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress2.value,
              status: this.getStatus.value,
              newtitles: {
                value: this.gettitle.value,
                label: this.getthaititle.value
              }
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
              this.props.history.push("/managemember");
            }
          );
        } else {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress2.value,
              newtitles: {
                value: this.gettitle.value,
                label: this.getthaititle.value
              }
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
              this.props.history.push("/managemember");
            }
          );
        }
      }
    } else {
      if (this.state.Address2 == "") {
        if (this.state.status == "") {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              status: this.getStatus.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress22.value
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
              this.props.history.push("/managemember");
            }
          );
        } else {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress22.value
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
              this.props.history.push("/managemember");
            }
          );
        }
      } else {
        if (this.state.status == "") {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              status: this.getStatus.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress2.value
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
            }
          );
        } else {
          this.setState(
            {
              id: this.getID.value,
              code: this.getCode.value,
              newfirstName: this.getName.value,
              newlastName: this.getSurname.value,
              newfirstThai: this.getFirstname.value,
              newlastThai: this.getLastname.value,
              newposition: this.getPosition.value,
              newtel: this.getTel.value,
              Address1: this.getAddress1.value,
              Address: this.getAddress2.value
            },
            () => {
              console.log(this.state);
              this.props.updatemem(this.state);
            }
          );
        }
      }
    }
  };

  render() {
    const { user, auth, profile, ID } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    if (profile.status != 'Admin') return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="card-panel hoverable">
          <h3 className="gray-text text-darken-3">Register</h3>

          <div className="input-field">
            <label htmlFor="code" className="active">
              รหัสพนักงานจาก
            </label>
            <input
              type="text"
              id="code"
              defaultValue={user.Id}
              ref={input => (this.getCode = input)}
            />
            <input
              type="hidden"
              value={ID}
              ref={input => (this.getID = input)}
            />
          </div>

          <Select
            placeholder="คำนำหน้าชื่อ"
            options={title}
            onChange={this.handleSelect1}
          />
          <input
            type="hidden"
            value={user.title}
            ref={input => (this.gettitle = input)}
          />
          <input
            type="hidden"
            value={user.titleThai}
            ref={input => (this.getthaititle = input)}
          />

          <div className="row">
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="firstThai" className="active">
                  ชื่อจริง
                </label>
                <input
                  type="text"
                  id="newfirstThai"
                  defaultValue={user.firstThai}
                  ref={input => (this.getFirstname = input)}
                />
              </div>
            </div>
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="lastThia" className="active">
                  นามสกุล
                </label>
                <input
                  type="text"
                  id="newlastName"
                  defaultValue={user.lastThai}
                  ref={input => (this.getLastname = input)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="firstName" className="active">
                  FirstName
                </label>
                <input
                  type="text"
                  id="newfirstName"
                  defaultValue={user.firstName}
                  ref={input => (this.getName = input)}
                />
              </div>
            </div>
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="lastName" className="active">
                  lastName
                </label>
                <input
                  type="text"
                  id="newlastName"
                  defaultValue={user.lastName}
                  ref={input => (this.getSurname = input)}
                />
              </div>
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="newposition" className="active">
              ตำแหน่ง
            </label>
            <input
              type="text"
              id="newposition"
              defaultValue={user.position}
              ref={input => (this.getPosition = input)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="newtel" className="active">
              เบอร์โทรศัพท์
            </label>
            <input
              type="text"
              id="newtel"
              defaultValue={user.tel}
              ref={input => (this.getTel = input)}
            />
          </div>

          <div className="divider"></div>

          <h3 className="">ที่อยู่</h3>
          <textarea
            id="Address1"
            defaultValue={user.Address1}
            ref={input => (this.getAddress1 = input)}
          />
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
          <input
            type="hidden"
            value={user.Address2}
            ref={input => (this.getAddress22 = input)}
          />

          <Select
            placeholder="Status"
            options={status}
            onChange={e => {
              this.setState({
                status: e.value
              });
            }}
          />
          <input
            type="hidden"
            value={user.status}
            ref={input => (this.getStatus = input)}
          />

          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Edit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprop) => {
  const ID = ownprop.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[ID] : "";
  return {
    ID: ID,
    user: user,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatemem: memid => dispatch(updatemem(memid))
  };
};

export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditMem);

const status = [
  { value: "Admin", label: "ผู้จัดการระบบ" },
  { value: "User", label: "ผู้จัดการเขต" },
  { value: "Accout", label: "ฝ่ายบัญชี" },
  { value: "Insure", label: "ฝ่ายประกัน" }
];

const title = [
  { value: "Miss", label: "นางสาว" },
  { value: "Mrs", label: "นาง" },
  { value: "Mr", label: "นาย" }
];

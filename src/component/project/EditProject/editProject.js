import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import EditDetail from "./editDetail";

class EditProject extends Component {
  render() {
    const { branchs, auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (profile.status === 'Accout' || profile.status === 'Insure') return <Redirect to="/" />

    if (branchs) {
      return (
        <div className="container">
          <form className="card-panel hoverable">
            <h3 className="gray-text text-darken-3">จัดการสาขา</h3>
            <table className="striped">
              <thead>
                <tr>
                  <th width="150"></th>
                  <th width="100">Cost center</th>
                  <th width="100">ธุรกิจ</th>
                  <th width="150">ชื่อสาขา</th>
                  <th width="200">ผู้จัดการเขต</th>
                  <th width="200">ที่อยู่</th>
                  <th width="100"></th>
                  <th width="100"></th>
                  <th width="100"></th>
                </tr>
              </thead>
              <tbody>
                { branchs && branchs.map(branch => {
                return (
                  <EditDetail branch={branch} />
                )
              })}
              </tbody>
            </table>
          </form>
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
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    branchs: state.firestore.ordered.branchs,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(
  firestoreConnect([{ collection: "branchs" }]),
  connect(mapStateToProps)
)(EditProject);

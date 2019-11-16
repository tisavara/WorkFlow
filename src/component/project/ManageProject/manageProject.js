import React, { Component } from "react";
import Right from "./rightProject";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Now extends Component {
  state = {
    branchId: "",
    num: ''
  };
  render() {
    const { branchs, auth, profile } = this.props;
    const ID = this.state.branchId;

    if (!auth.uid) return <Redirect to="/signin" />
    if (profile.status == 'Accout' || profile.status == 'Insure') return <Redirect to="/" />

    if (branchs) {
      return (
        <div className="container">
          <h3>สาขาปัจจุบัน</h3>
          <input type="radio" />
          <div className="row">
            <div className="collection col s5">
              <div class="input-field">
                <input id="search" type="search" required />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>

              {branchs &&
                branchs.map((branch, i) => {
                  return (
                    <div>
                      <a
                        value={this.state.check}
                        className="collection-item blue-text"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            branchId: branch.id
                          });
                        }}
                      >
                        {i}.  {branch.Branch.Name}
                      </a>
                    </div>
                  );
                })}
            </div>
            <div name="rightPage" id="rightPage" className="col s7 right">
              <Right ID={ID} />
            </div>
          </div>
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
)(Now);

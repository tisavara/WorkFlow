import React, { Component } from "react";
import Vice from "./vice";
import Area from "./area";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import Email from "./email";
import AllVice from "./Allvice";
import AllArea from "./Allarea";

class Setting extends Component {
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (profile.status != 'Admin') return <Redirect to="/" />

    return (
      <div className="container">
        <h3>Setting</h3>
        <CollapsibleComponent>
          <div className="card-panel hoverable">
            <h5>ผู้จัดการฝ่าย</h5>

            <CollapsibleHead className="blue">
              เพิ่มผู้จัดการฝ่าย
            </CollapsibleHead>
            <CollapsibleContent>
              <br />
              <Vice />
              <br />
            </CollapsibleContent>
            <div className="divider"></div>
            <CollapsibleHead className=" blue darken-3">
              ผู้จัดการฝ่ายทั้งหมด
            </CollapsibleHead>
            <CollapsibleContent>
              <AllVice />
            </CollapsibleContent>
          </div>

          <div className="card-panel hoverable">
            <h5>ผู้จัดการสาขา</h5>
            <CollapsibleHead className="blue">
              เพิ่มผู้จัดการสาขา
            </CollapsibleHead>
            <CollapsibleContent>
              <br />
              <Area />
              <br />
            </CollapsibleContent>
            <div className="divider"></div>
            <CollapsibleHead className=" blue darken-3">
              ผู้จัดการสาขาทั้งหมด
            </CollapsibleHead>
            <CollapsibleContent>
              <AllArea />
            </CollapsibleContent>
          </div>

          <div className="card-panel hoverable">
            <h5>Email</h5>
            <Email />
          </div>
        </CollapsibleComponent>
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

export default connect(mapStateToProps)(Setting);

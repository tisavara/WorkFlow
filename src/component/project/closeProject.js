import React, { Component } from "react";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Close extends Component {
  render() {
    const { close, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (close) {
      return (
        <div className="container">
          <h3>สาขาที่ปิด</h3>
          <table className="striped">
            <thead>
              <tr>
                <th style={{width: 50}}>#</th>
                <th></th>
                <th>ธุรกิจ</th>
                <th>Cost center</th>
                <th>ชื่อสาขา</th>
                <th>ที่อยู่</th>
                <th>วันที่เปิด</th>
                <th>วันที่ปิด</th>
              </tr>
            </thead>
            <tbody>
              {close &&
                close.map((close, i) => {
                  let Branchlogo;
                  if (close.business == "Fit auto") {
                    Branchlogo =
                      "https://kasikornbank.com/th/promotion/PublishingImages/PTT/logo-fit-auto.png";
                  } else if (close.business == "สถานีน้ำมัน") {
                    Branchlogo =
                      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/PTT_Public_Company_logo.svg/1200px-PTT_Public_Company_logo.svg.png";
                  } else if (close.business == "NGV") {
                    Branchlogo =
                      "https://nis.pttplc.com/nis/images/pttlogo.png";
                  } else if (close.business == "7-Eleven") {
                    Branchlogo =
                      "https://seeklogo.com/images/1/7-Eleven-logo-08AAB4F0FE-seeklogo.com.png";
                  } else if (close.business == "Cafe Amazon") {
                    Branchlogo =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV8tvldewaTAdIVuq72k26yJj7r9l4z85rPh-qD9x1Io4Sdtf&s";
                  } else if (close.business == "ฮั่วเช่งฮง") {
                    Branchlogo =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkm6OVRgTxS0yq8XMrJya4mQOpk0IfGMT1dHGPmh-0Qn8DmbH&s";
                  } else if (close.business == "Daddy dough") {
                    Branchlogo =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjctozRMRjUD5N_9UwDcLyWpAqdAI9KsI9mBNh9-_ujv6yvke7&s";
                  }
                  return (
                    <tr>
                      <td>{i}.</td>
                      <td>
                        <img src={Branchlogo} style={{ height: 50 }} />
                      </td>
                      <td>{close.business}</td>
                      <td>{close.cost}</td>
                      <td>{close.name}</td>
                      <td>{close.address}</td>
                      <td>
                        {moment(close.open.toDate().toString()).format("lll")}
                      </td>
                      <td>
                        {moment(close.close.toDate().toString()).format("lll")}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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
    close: state.firestore.ordered.close,
    auth: state.firebase.auth
  };
};

export default compose(
  firestoreConnect([{ collection: "close", limit: 6, orderBy: ["close", "desc"] }]),
  connect(mapStateToProps)
)(Close);

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component"
import { Link } from "react-router-dom";

const Right = ({ ID, branch }) => {
  let Branchlogo;
  if (branch) {
    if (branch.Branch.Type.label == "Fit auto") {
      Branchlogo =
        "https://kasikornbank.com/th/promotion/PublishingImages/PTT/logo-fit-auto.png";
    } else if (branch.Branch.Type.label == "สถานีน้ำมัน") {
      Branchlogo =
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/PTT_Public_Company_logo.svg/1200px-PTT_Public_Company_logo.svg.png";
    } else if (branch.Branch.Type.label == "NGV") {
      Branchlogo = "https://nis.pttplc.com/nis/images/pttlogo.png";
    } else if (branch.Branch.Type.label == "7-Eleven") {
      Branchlogo =
        "https://seeklogo.com/images/1/7-Eleven-logo-08AAB4F0FE-seeklogo.com.png";
    } else if (branch.Branch.Type.label == "Cafe Amazon") {
      Branchlogo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV8tvldewaTAdIVuq72k26yJj7r9l4z85rPh-qD9x1Io4Sdtf&s";
    } else if (branch.Branch.Type.label == "ฮั่วเช่งฮง") {
      Branchlogo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkm6OVRgTxS0yq8XMrJya4mQOpk0IfGMT1dHGPmh-0Qn8DmbH&s";
    } else if (branch.Branch.Type.label == "Daddy dough") {
      Branchlogo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjctozRMRjUD5N_9UwDcLyWpAqdAI9KsI9mBNh9-_ujv6yvke7&s";
    }

    let status1 = ""
    let style1 = ""
    let status2 = ""
    let style2 = ""
    let status3 = ""
    let style3 = ""
    let status4 = ""
    let style4 = ""
    if (branch) {
      if (branch.statusCost === 'noCost') {
        status1 = "บัญชีกำลังดำเนินการ..."
        style1 = "orange-text"
      }else if (branch.statusCost === 'sendCost') {
        status1 = "Shared Service กำลังดำเนินการ..."
        style1 = "orange-text"
      }else if (branch.statusCost === 'Success') {
        status1 = "เสร็จสิ้น"
        style1 = "green-text"
        if (branch.statusInsure === 'noInsure') {
          status2 = "ประกันกำลังดำเนินการ..."
          style2 = "orange-text"
        }else {
          status2 = <Link to={"/docinsure/"+ "insure/" + ID} key={"insure", ID}>ทำเอกสาร</Link>
        }
        status3 = <Link to={"/doctel/"+ "tel/" + ID} key={"tel", ID}>ทำเอกสาร</Link>
        status4 = <Link to={"/docchange/"+ "change/" + ID} key={"change", ID}>ทำเอกสาร</Link>
      }else {
        status1 = <Link to={"/docopen/"+ "open/" + ID} key={"open", ID}>ทำเอกสาร</Link>
      }
    }
    return (
      <div className="card-panel hoverable">
        <div className="row">
          <div className="col">
            <h4>ชื่อสาขา : {branch.Branch.Name}</h4>
            <h5>ประเภทธุรกิจ : {branch.Branch.Type.label}</h5>
          </div>
          <div className="col right">
            <img src={Branchlogo} style={{ height: 50 }} />
          </div>
        </div>

        <div className="row">
          <div className="col">เปิด Cost center</div>
          <div className={"col right " + style1}>{status1}</div>
        </div>

        <div className="row">
          <div className="col">ทำประกัน</div>
          <div className={"col right " + style2}>{status2}</div>
        </div>

        <div className="row">
          <div className="col">เบิกโทรศัพท์</div>
          <div className={"col right " + style2}>{status3}</div>
        </div>

        <div className="row">
          <div className="col">เบิกเงินสำรองทอน</div>
          <div className={"col right " + style2}>{status4}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-panel hoverable">
        <p align="center">
          <h4>โปรดเลือกสาขา....</h4>
        </p>
        <mapStateToProps ownProps={ID} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.ID;
  const branchs = state.firestore.data.branchs;
  const branch = branchs ? branchs[id] : null;
  return {
    branch: branch
  };
};

export default compose(
  firestoreConnect([{ collection: "branchs" }]),
  connect(mapStateToProps)
)(Right);

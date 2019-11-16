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

        <CollapsibleComponent>
          <CollapsibleHead className="blue">เปิด Cost center</CollapsibleHead>
          <CollapsibleContent>
            <div className="row">
              <div className="col">ส่งเอกสารขอเปิด Cost center</div>
              <div className="col right"><Link to={"/docopen/"+ "open/" + ID} key={"open", ID}>ทำเอกสาร</Link></div>
            </div>

            <div className="row">
              <div className="col">บัญชีส่งเอกสารให้กับ Share service</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">
                Share service ดำเนินการออกเลข Cost center เสร็จสิ้น
              </div>
              <div className="col right"></div>
            </div>
          </CollapsibleContent>

          <div className="divider"></div>
          <CollapsibleHead className=" blue darken-3">ทำประกัน</CollapsibleHead>
          <CollapsibleContent>
            <div className="row">
              <div className="col">ส่งเอกสารขอทำประกัน</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">ประกันออก Memo และ หนังสือส่งให้ กจก.</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">บริษัทประกันออกใบแจ้งหนี้และกรมธรรม์</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">
                ประกันออก Memo ค่าเบี้ยประกันแนบหนังสือส่งให้ กจก.
              </div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">บัญชีส่งเอกสารให้กับ Share service</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">Share service ออกเชคส่งให้ประกัน</div>
              <div className="col right"></div>
            </div>
          </CollapsibleContent>

          <div className="divider"></div>
          <CollapsibleHead className="blue">เบิกโทรศัพท์</CollapsibleHead>
          <CollapsibleContent>
            <div className="row">
              <div className="col">ส่งเอกสารขอเบิกโทรศัพท์</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">ผู้จัดการฝ่ายพิจารณา</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">บริหารส่วนกลางจัดสรรโทรศัพท์</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">ผู้จัดการเขตรับโทรศัพท์</div>
              <div className="col right"></div>
            </div>
          </CollapsibleContent>

          <div className="divider"></div>
          <CollapsibleHead className=" blue darken-3">
            เบิกเงินสำรองทอน
          </CollapsibleHead>
          <CollapsibleContent>
            <div className="row">
              <div className="col">ส่งเอกสารขอเบิกเงินสำรองทอน</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">ผู้จัดการฝ่ายพิจารณา</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">รคป. พิจารณา</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">กจก. พิจารณา</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">บัญชีส่งเอกสารให้กับ Share service</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">Share service โอนเงินให้กับผู้จัดการเขต</div>
              <div className="col right"></div>
            </div>

            <div className="row">
              <div className="col">ผู้จัดการเขตรับเงินสำรองทอน</div>
              <div className="col right"></div>
            </div>
          </CollapsibleContent>
        </CollapsibleComponent>
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

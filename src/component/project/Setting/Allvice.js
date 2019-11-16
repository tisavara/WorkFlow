import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteVice } from '../../../store/actions/viceAction'

const AllVice = (props) => {
  const { vices } = props
  return (
    <table className="striped">
      <thead>
        <tr>
          <th>ชื่อ-สกุล</th>
          <th>รหัสพนักงาน</th>
          <th>เบอร์โทรศัพท์</th>
          <th width="150"></th>
          <th width="150"></th>
        </tr>
      </thead>
      <tbody>
        {vices &&
          vices.map(vice => {
            return (
              <tr>
                <td>{ vice.title.label } { vice.Thainame } { vice.Thaisurname }</td>
                <td>{ vice.code }</td>
                <td>{ vice.tel }</td>
                <td>
                    <button className="btn waves-effect waves-light red right" onClick={() => {
                      if (window.confirm('คุณแน่ใจหรือไม่ ลบ '+ vice.title.label + vice.Thainame + " " + vice.Thaisurname +" ออก")){
                        props.deleteVice(vice.id)
                      }
                    }} >
                      <i class="material-icons left">delete</i>Delete
                    </button>
                </td>
                <td>
                    <button class="btn orange darken-2 right" type="submit" name="action">
                        <i class="material-icons left">edit</i>แก้ไข
                    </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteVice: (viceid) => dispatch(deleteVice(viceid))
  }
}

const mapStateToProps = state => {
  return {
    vices: state.firestore.ordered.vice
  };
};

export default compose(
  firestoreConnect([{ collection: "vice" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(AllVice);

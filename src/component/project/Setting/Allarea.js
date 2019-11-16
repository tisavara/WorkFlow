import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteArea } from '../../../store/actions/areaAction'

const AllArea = (props) => {
  const { Areas } = props
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
        {Areas &&
          Areas.map(area => {
            return (
              <tr>
                <td>{ area.title2.label } { area.Thainame2 } { area.Thaisurname2 }</td>
                <td>{ area.code2 }</td>
                <td>{ area.tel2 }</td>
                <td>
                  <button className="btn waves-effect waves-light red right" onClick={() => {
                    if (window.confirm('คุณแน่ใจหรือไม่ ลบ '+ area.title2.label + area.Thainame2 + ' ' + area.Thaisurname2 +' ออก')) {
                      props.deleteArea(area.id)
                    }
                  }}>
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

const mapStateToProps = state => {
  return {
    Areas: state.firestore.ordered.area
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArea: (areaid) => dispatch(deleteArea(areaid))
  }
}

export default compose(
  firestoreConnect([{ collection: "area" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(AllArea);

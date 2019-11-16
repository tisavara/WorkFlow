import React, { Component } from "react";
import { connect } from "react-redux";
import { viceAction } from "../../../store/actions/viceAction";
import Select from "react-select";

class Vice extends Component {
  state = {
    title: "",
    Thainame: "",
    Thaisurname: "",
    Engname: "",
    Engsurname: "",
    code: "",
    tel: "",
    email: ""
  };

  handleChang = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.viceAction(this.state);
  };

  handleSelect1 = e => {
    this.setState({ title: e });
  };
  render() {
    const { viceError, style } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Select
          placeholder="คำนำหน้าชื่อ"
          options={title}
          onChange={this.handleSelect1}
        />

        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Thainame">เพิ่มชื่อผู้จัดการฝ่าย</label>
              <input type="text" id="Thainame" onChange={this.handleChang} />
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Thaisurname">เพิ่มนามสกุลผู้จัดการฝ่าย</label>
              <input type="text" id="Thaisurname" onChange={this.handleChang} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Engname">Name</label>
              <input type="text" id="Engname" onChange={this.handleChang} />
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Engsurname">Surname</label>
              <input type="text" id="Engsurname" onChange={this.handleChang} />
            </div>
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="code">รหัสพนักงาน</label>
          <input type="text" id="code" onChange={this.handleChang} />
        </div>

        <div className="input-field">
          <label htmlFor="tel">เบอร์โทรศัพท์</label>
          <input type="text" id="tel" onChange={this.handleChang} />
        </div>

        <div className="input-field">
          <label htmlFor="email">เพิ่ม Email</label>
          <input type="email" id="email" onChange={this.handleChang} />
        </div>

        <button
          type="submit"
          class="btn waves-effect waves-light blue"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
        <div className={style}>
          {viceError ? (
            <p>
              <h5>{viceError}</h5>
            </p>
          ) : null}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    viceError: state.vice.viceError,
    style: state.vice.style
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viceAction: vices => dispatch(viceAction(vices))
  };
};

const title = [
  { value: "Miss", label: "นางสาว" },
  { value: "Mrs", label: "นาง" },
  { value: "Mr", label: "นาย" }
];

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vice);

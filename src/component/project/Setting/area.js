import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { areaAction } from '../../../store/actions/areaAction'

class Area extends Component {
  state = {
    title2: "",
    Thainame2: "",
    Thaisurname2: "",
    Engname2: "",
    Engsurname2: "",
    code2: "",
    tel2: "",
    email2: ""
  }
  handleChang = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.areaAction(this.state)
  };

  handleSelect1 = e => {
    this.setState({ title2: e });
  };
  render() {
    const { areaError, style } = this.props
    return (
      <form onSubmit={this.handleSubmit}>

        <Select placeholder="คำนำหน้าชื่อ" options={title} onChange={this.handleSelect1} />

        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Thainame2">เพิ่มชื่อผู้จัดการสาขา</label>
              <input type="text" id="Thainame2" onChange={this.handleChang} />
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Thaisurname2">เพิ่มนามสกุลผู้จัดการสาขา</label>
              <input type="text" id="Thaisurname2" onChange={this.handleChang} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Engname2">Name</label>
              <input type="text" id="Engname2" onChange={this.handleChang} />
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <label htmlFor="Engsurname2">Surname</label>
              <input type="text" id="Engsurname2" onChange={this.handleChang} />
            </div>
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="code2">รหัสพนักงาน</label>
          <input type="text" id="code2" onChange={this.handleChang} />
        </div>

        <div className="input-field">
          <label htmlFor="tel2">เบอร์โทรศัพท์</label>
          <input type="text" id="tel2" onChange={this.handleChang} />
        </div>

        <div className="input-field">
          <label htmlFor="email2">เพิ่ม Email</label>
          <input type="email" id="email2" onChange={this.handleChang} />
        </div>
        <button
          type="submit"
          class="btn waves-effect waves-light blue"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
        <div className={ style }>
          { areaError ? <p><h5>{ areaError }</h5></p>: null }
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    areaError: state.area.areaError,
    style: state.area.style
  }
}

const mapDispatchToProps = dispatch => {
  return {
    areaAction: areas => dispatch(areaAction(areas))
  };
};

const title = [
  { value: "Miss", label: "นางสาว" },
  { value: "Mrs", label: "นาง" },
  { value: "Mr", label: "นาย" }
];

export default connect(mapStateToProps, mapDispatchToProps)(Area);

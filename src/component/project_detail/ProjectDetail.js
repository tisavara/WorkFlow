import React, { Component } from "react";
import { updateProject } from '../../store/actions/projectAction'
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";

class ProjectDetails extends Component {
  state = {
    newcontent: '',
    newtitle: '',
    newid: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.newtitle == '') {
      if (this.state.newcontent == ''){
        this.setState({
          newtitle: this.getTitle.value,
          newcontent: this.getContent.value,
          newid: this.getID.value
        }, () => {
        this.props.updateProject(this.state)
        this.props.history.push("/")
        })
      }else {
        this.setState({
          newtitle: this.getTitle.value
        }, () => {
        this.props.updateProject(this.state)
        this.props.history.push("/")
        })
      }
    }else {
      if (this.state.newcontent == ''){
        this.setState({
          newcontent: this.getContent.value
        }, () => {
        this.props.updateProject(this.state)
        this.props.history.push("/")
        })
      }else {
        this.props.updateProject(this.state)
        this.props.history.push("/")
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value ,
      newid: this.getID.value
    })
  }
  render() {
    console.log(this.props)
    const { project, auth, id } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (project) {
      return (
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>แก้ไขโพสท์</h3>
          <div className="row">
            <div className="col s2">{project.id} 
              <h5 className="right">หัวข้อ</h5>
            </div>
            <div className="col s6">
              <input type="hidden" id="newid" value={id} ref={(input) => this.getID = input} />
              <input type="hidden" value={project.title} ref={(input) => this.getTitle = input} />
              <input id="newtitle" placeholder={project.title} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col s2">
              <h5 className="right">เนื้อหา</h5>
            </div>
            <div className="col s6">
              <input type="hidden" value={project.content} ref={(input) => this.getContent = input} />
              <textarea id="newcontent" placeholder={project.content} onChange={this.handleChange} />
            </div>
          </div>
          <br />
          <button
            type="submit"
            class="btn waves-effect waves-light blue"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
          <br />
          <br />
          <br />
          <br />
        </form>
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
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    id: id,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (projectid) => dispatch(updateProject(projectid))
  }
}

export default compose(
  firestoreConnect([{ collection: "projects" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(ProjectDetails);

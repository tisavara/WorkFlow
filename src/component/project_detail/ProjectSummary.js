import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProject } from "../../store/actions/projectAction";

const ProjectSummary = props => {
  const { project } = props;
  return (
    <div className="card hoverable project-summary">
      <div className="card-content gray-text text-darken-3">
        <span className="card-title blue-text">{project.title}</span>
        <div className="divider"></div>
        <br />
        <p className="grey-text"> {project.content} </p>
        <br />
        <p className="blue-text">
          Posted by {project.authorFirstName} {project.authorLastName}{" "}
        </p>
        <p className="grey-text">
          {" "}
          {moment(project.createAt.toDate().toString()).calendar()}{" "}
        </p>
        <a href="">
          <i
            class="material-icons right blue-text"
            onClick={e => {
              if (
                window.confirm(
                  "คุณแน่ใจหรือไม่ที่จะลบ " + project.title + " ออก"
                )
              ) {
                e.preventDefault();
                props.deleteProject(project.id);
              }
            }}
          >
            delete
          </i>
        </a>

        <Link to={"/project/" + project.id} key={project.id}>
          <i class="material-icons right">edit</i>
        </Link>

        <br />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: projectid => dispatch(deleteProject(projectid))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProjectSummary);

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container page-footer blue">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Project Workflow</h5>
              <p className="grey-text text-lighten-4">
                Develope by Mrs.Tisavara Somboon
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2019 Copyright Text</div>
        </div>
      </footer>
    );
  }
}

export default Footer;

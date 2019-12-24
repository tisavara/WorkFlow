import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from "./component/project_detail/ProjectDetail";
import SignIn from "./component/auth/SignIn";
import CreateProject from "./component/project/CreateProject";
import openProject from "./component/project/openProject";
import Close from "./component/project/closeProject";
import Now from "./component/project/ManageProject/manageProject";
import Download from "./component/project/download/download";
import EditProject from "./component/project/EditProject/editProject";
import ManageMem from "./component/auth/manageMem/ManageMem";
import MemFirebase from "./component/auth/manageMem/MemberFirebase";
import Setting from "./component/project/Setting/setting";
import EditProfile from "./component/project/editAccout";
import EditMem from "./component/auth/manageMem/editMem";
import openBranch from "./component/project/document/openBranch";
import Footer from "./component/layout/Footer";
import Renovate from "./component/project/EditProject/renovate";
import Relocate from "./component/project/EditProject/relocate";
import EmailUserToAccount from "./component/project/Email/emailUserToAccount";
import AccountManage from "./component/project/Account/AccountManage";
import Insurance from "./component/project/document/Insurance";
import Telephone from "./component/project/document/telephone";
import ChangeMoney from "./component/project/document/changeMoney";
import CostCenter from "./component/project/document/CostCenter";
import openCost from "./component/project/document/openCost";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/docopen/:name/:id" component={openBranch} />
        <Route path="/docopencost/:name/:id" component={openCost} />
        <Route path="/emailUTA" component={EmailUserToAccount} />
        <Route path="/docinsure/:name/:id" component={Insurance} />
        <Route path="/doctel/:name/:id" component={Telephone} />
        <Route path="/docchange/:name/:id" component={ChangeMoney} />
        <Route path="/costcenter/:name/:id" component={CostCenter} />
        <Route component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const Dash = () => {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/managemember" component={ManageMem} />
          <Route path="/accountmanage" component={AccountManage} />
          <Route path="/member/:id" component={MemFirebase} />
          <Route path="/create" component={CreateProject} />
          <Route path="/open" component={openProject} />
          <Route exact path="/now" component={Now} />
          <Route path="/close" component={Close} />
          <Route path="/download" component={Download} />
          <Route path="/manageproject" component={EditProject} />
          <Route path="/setting" component={Setting} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route path="/editmem/:id" component={EditMem} />
          <Route path="/renovate/:id" component={Renovate} />
          <Route path="/relocate" component={Relocate} />
        </Switch>
        <Footer />
      </div>
  )
}

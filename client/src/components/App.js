import React, { Component } from "react"; //ES2015
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

//BrowerRouter : the brain of the react router.
//Route : set up the rule of the router.

//Example : Set up a dummy coponent.
//This dummy component will be functional component which returns h2
// const Header = () => <h2>Header</h2>;
import Header from "./Header"; // remove dummy Header and replace with Header.js
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

//BrouwerRouter tag should have at most one child
//Inside of BrowserRouter, here we are going to put rules of routing
//path attribute match from the beginning so we should make rule to show exact one.
//we can solve this by using keyword exact
//Header will be showed no matter what happend, and we will do this by using Header it self.
// the Contents of each component will be detemiened by Redux files.

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      // jaxs
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);

import React from "react"; //ES2015
import { BrowserRouter, Route } from "react-router-dom";

//BrowerRouter : the brain of the react router.
//Route : set up the rule of the router.

//Example : Set up a dummy coponent.
//This dummy component will be functional component which returns h2
// const Header = () => <h2>Header</h2>;
import Header from "./Header"; // remove dummy Header and replace with Header.js
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
//BrouwerRouter tag should have at most one child
//Inside of BrowserRouter, here we are going to put rules of routing
//path attribute match from the beginning so we should make rule to show exact one.
//we can solve this by using keyword exact
//Header will be showed no matter what happend, and we will do this by using Header it self.
// the Contents of each component will be detemiened by Redux files.

const App = () => {
  return (
    // jaxs
    <div>
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
};

export default App;

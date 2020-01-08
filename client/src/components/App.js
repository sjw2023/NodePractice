import React from "react"; //ES2015
import { BrowserRouter, Route } from "react-router-dom";

//BrowerRouter : the brain of the react router.
//Route : set up the rule of the router.

//Example : Set up a dummy coponent.
//This dummy component will be functional component which returns h2
const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Surveynew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    // jaxs
    <div>
      <BrowserRouter>
        //this should have at most one child
        <div>
          //here we are going to put rules of routing
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

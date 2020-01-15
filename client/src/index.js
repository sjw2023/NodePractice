// the very root of the client app

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "materialize-css/dist/css/materialize.min.css";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));
//creating redux store
// () => [], dummy arrow function that returns array
//second argument will be used for initializing the first state of app.

//hooking the redux store with react side by using provide initializing
//App tag is locsted in provider tag which means it is the child of provider
ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />{" "}
  </Provider>,
  document.querySelector("#root")
);

// console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is ", process.env.NODE_ENV);

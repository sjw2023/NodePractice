import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   // const request = axios.get("/api/crrent_user");
//   return function(dispatch) {
//     // Putting dispatch is the way to use reduxThunk
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

/////// refactoring

/////1. arrow function means return next statement and the return statement in the function is
/////one statement, so we can remove the curly braces and return .
// export const fetchUser = () =>
//   // const request = axios.get("/api/crrent_user");
//   function(dispatch) {
//     // Putting dispatch is the way to use reduxThunk
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };

/////2. the function keyword is needless here since we are using the arrow function which means
///// the function is going to return next statement.
///// the argument has only one elements so we don't need parentheses around it.

// export const fetchUser = () => dispatch => {
//   axios
//     .get("/api/current_user")
//     .then(res => dispatch({ type: FETCH_USER, payload: res }));
// };

///////3. instead of .then promises we can use await and async
///// find the function which is containing promises and put async
///// and replace actual promise with await keyword
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res });
};

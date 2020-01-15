import { FETCH_USER } from "../actions/types";

//update the value that is sent from the action
export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

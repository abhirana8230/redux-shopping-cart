import { combineReducers } from "redux"; //for combining multiple reducers
import { cartReducer } from "./reducer";

//for putting multiple reducer at one place
const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;

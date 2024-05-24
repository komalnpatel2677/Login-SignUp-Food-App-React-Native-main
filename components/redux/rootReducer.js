import { combineReducers } from "redux";
import reducer  from './reducer';

const rootReducer = combineReducers({
    cart: reducer,

});
export default rootReducer;
  

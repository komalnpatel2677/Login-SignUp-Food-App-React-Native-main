import {  legacy_createStore as createStore,combineReducers } from 'redux';
//import { reducer } from './reducer';
import reducer from './reducer';


const rootReducer = combineReducers({
    cart: reducer,
    // Add other reducers if needed
  });
//const otherStore = createStore(reducer);
const customStore = createStore(rootReducer);

export default customStore;

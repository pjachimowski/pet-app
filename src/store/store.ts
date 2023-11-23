import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import petsReducer from "./petsReducer";

const rootReducer = combineReducers({
  pets: petsReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

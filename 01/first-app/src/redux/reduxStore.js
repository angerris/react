//importing redux and reducers
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
//combining reducers
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
//creating store
const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;

//importing redux and reducers
import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
//combining reducers
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sidebar: sidebarReducer,
});
//creating store
const store = createStore(reducers);
window.store = store;
export default store;

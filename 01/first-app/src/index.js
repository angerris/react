import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/reduxStore";
import StoreContext from "./StoreContext";
//
const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
//redux store doesnt pass state w/ subscribe
store.subscribe(() => {
  //'ask' for the state from store
  let state = store.getState();
  //render changes
  rerenderEntireTree(state);
});

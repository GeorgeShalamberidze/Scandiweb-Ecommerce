import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./redux/stateProvider";
import { initialState, reducer } from "./redux/reducers";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

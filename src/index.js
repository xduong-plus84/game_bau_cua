import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//reudux
import { reducerRoot } from "./reducer/reducerRoot";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(reducerRoot);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "redux/reducer/index"

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "antd/dist/antd.css";

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

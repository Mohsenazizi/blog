import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import thunk from "redux-thunk";
import reducer from "./base/store/reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./base/styles/main.scss";
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </>,
  document.getElementById("app")
);

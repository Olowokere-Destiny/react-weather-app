import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./components/reducer/settingsReducer";
import { Provider } from "react-redux";
const store = configureStore({ reducer: settingsReducer });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

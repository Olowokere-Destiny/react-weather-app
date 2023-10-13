import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./components/reducer/settingsSlice";
import { Provider } from "react-redux";
const store = configureStore({ reducer: {settings: settingsSlice} });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

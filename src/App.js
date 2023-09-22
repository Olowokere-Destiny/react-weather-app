import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SaveLocation from "./components/SaveLocation";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/settings";
import Error from "./components/Error404";
import { bindActionCreators } from "@reduxjs/toolkit";
import toggleAction from "./components/reducer/settingsAction";
import { connect } from "react-redux";

function App({state}) {
  function setLs(mode) {
    localStorage.setItem("pref_light", mode);
  }
  setLs(JSON.stringify(state));
  if (state) {
    document.body.style.background = "#FFF";
    document.body.style.color = "#000";
  } else if (state === false) {
    document.body.style.background = "#000";
    document.body.style.color = "#FFF";
  }
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="savelocation" element={<SaveLocation />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state.mode
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggle: toggleAction
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

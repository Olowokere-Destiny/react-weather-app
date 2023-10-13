import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SaveLocation from "./components/SaveLocation";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/settings";
import Error from "./components/Error404";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state.settings.mode);
  setLs(JSON.stringify(state));
  function setLs(mode) {
    localStorage.setItem("pref_light", mode);
  }
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

export default App;

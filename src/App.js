import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SaveLocation from "./components/SaveLocation";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/settings";
import Error from "./components/Error404";

function App() {
  let lsMode = localStorage.getItem("pref_light");
  if (lsMode === "false") {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  } else if (lsMode === "true") {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
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

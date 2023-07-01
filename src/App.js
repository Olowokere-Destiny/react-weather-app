import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SaveLocation from "./components/SaveLocation";
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Settings from "./components/settings";

function App() {
  let lsMode = localStorage.getItem("pref_light");
  if (lsMode === "false") {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  } else if (lsMode === "true") {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
  console.log(lsMode);

  return (
    <Router basename="react-weather-app">
      <div className="App">
        <Routes>
        <Route element={<Navbar />}>
          <Route exact path="/react-weather-app" element={<Home />} />
          <Route path="savelocation" element={<SaveLocation />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

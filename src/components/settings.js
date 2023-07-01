import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { showAlert } from "./utilityFunctions";
export default function Settings() {
  const [mode, setMode] = useState(false);
  let lsMode = localStorage.getItem("pref_light");
  function changeToggle() {
    setMode(!mode);
    !mode && localStorage.setItem("pref_light", mode.toString());
    mode && localStorage.setItem("pref_light", mode.toString());
    if (lsMode === "true") {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    } else if (lsMode === "false") {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div className="m-4">
      <h1 className="text-3xl text-center font-bold underline">Settings</h1>
      <div className="border-2 border-blue-500 mt-6 rounded-md md:w-4/5 md:mx-auto">
        <div className="m-4">
          <h2 className="font-semibold text-lg mt-2">Appearance</h2>
          <div className="flex items-center justify-between">
            Toggle darkmode
            <div onClick={changeToggle}>
              {lsMode === "true" && (
                <FontAwesomeIcon icon={faToggleOff} size="2x" />
              )}
              {lsMode === "false" && (
                <FontAwesomeIcon icon={faToggleOn} size="2x" />
              )}
              {!lsMode && <FontAwesomeIcon icon={faToggleOff} size="2x" />}
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-blue-500 mt-6 rounded-md md:w-4/5 md:mx-auto p-6">
        <h2 className="font-bold text-lg">Clear location data</h2>
        <p>
          Clear your location data from the app so when you start the app again,
          it loads up a default location. You can set up your location again in
          location settings.
        </p>
        <button
          className="font-medium text-md block mx-auto m-3 bg-blue-500 p-2 rounded-md text-white"
          onClick={showAlert}
        >
          Clear Data
        </button>
      </div>
    </div>
  );
}

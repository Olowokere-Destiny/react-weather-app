import { useEffect, useState } from "react";
import key from "../key";
import {
  addSuccess,
  noInternet,
  noValidate,
} from "./utilityFunctions";
export default function SaveLocation() {
  const [location, setLocation] = useState({ lData: "" });
  const [lsLoc, setLoc] = useState("");

  let lsLocation = localStorage.getItem("saved_location");
  useEffect(() => {
    setLoc(lsLocation);
  }, []);

  function change(event) {
    const { name, value } = event.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  }

  function checkLocation() {
    const res = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.lData}&appid=${key}&units=metric`
    );
  }

  function saveLocation() {
    checkLocation();
    if (!navigator.onLine) {
      noInternet();
    } else if (location.lData.length < 1 || location.lData === "" || location.lData.trim() === "") {
      noValidate();
    } else {
      localStorage.setItem("saved_location", location.lData);
      addSuccess();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  return (
    <div className="m-6">
      <p className="text-lg font-bold underline">Save Location Data</p>
      <p>
        Save your current location so that the app loads your location's data by
        default the next time you open the app.
      </p>
      <p>
        If you encounter an error or a blank page on sign in, check your saved
        location and enter a valid location.
      </p>
      <br />
      <p>Please ensure to enter the name of a valid location.</p>
      <p>
        Saved location: <i>{!lsLoc ? "No saved locations yet" : lsLoc}</i>
      </p>
      <div className="m-10">
        <input
          className="md:w-1/3 block mx-auto mt-8 rounded-md border-2 border-slate-400 focus:outline-2 focus:outline-blue-500 custom"
          name="lData"
          onChange={change}
          value={location.lData}
        />
        <button
          className="block mx-auto bg-blue-600 text-white font-semibold mt-6 p-2 rounded-md"
          onClick={saveLocation}
        >
          Save Location
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import key from "../key";
import {
  addSuccess,
  noInternet,
  noValidate,
  notFound,
} from "./utilityFunctions";
export default function SaveLocation() {
  const [location, setLocation] = useState({ lData: "" });
  const [lsLoc, setLoc] = useState("");
  const [okay, setOkay] = useState(null);
  const [fetching, setFetching] = useState(null);

  let lsLocation = localStorage.getItem("saved_location");
  useEffect(() => {
    setLoc(lsLocation);
  }, [lsLocation]);

  function change(event) {
    const { name, value } = event.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (okay === true) {
      addSuccess();
    } else if (okay === false) {
      notFound();
    }
  }, [okay]);

  async function searchLocation() {
    setFetching(true);
    let ctrl = new AbortController();
    let timeout = setTimeout(() => {
      ctrl.abort();
    }, 9000);
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.lData.trim()}&appid=${key}&units=metric`;
    const res = await fetch(forecastUrl, { signal: ctrl.signal });
    clearTimeout(timeout);
    const data = await res.json();
    if (res) {
      if (res.status === 200 && res.ok === true) {
        setOkay(true);
        setFetching(false);
        localStorage.setItem("saved_location", data.city.name);
        data && setLoc(data.city.name);
        location.lData = "";
      } else if (res.status === 404 && res.ok === false) {
        setOkay(false);
      }
    }
    setFetching(false);
  }

  function saveLocation() {
    if (!navigator.onLine) {
      noInternet();
    } else if (
      location.lData.length < 1 ||
      location.lData === "" ||
      location.lData.trim() === ""
    ) {
      noValidate();
    } else {
      searchLocation();
    }
  }

  return (
    <div className="m-6">
      <p className="text-lg font-bold underline">Save Location Data</p>
      <p>
        Save your current location so that the app loads your location's data by
        default the next time you open the app.
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
          className="block mx-auto bg-blue-600 text-white font-semibold mt-6 p-2 rounded-md disabled:bg-stone-700"
          onClick={saveLocation}
          disabled={fetching}
        >
          {fetching ? "Loading" : "Save Location"}
        </button>
      </div>
    </div>
  );
}

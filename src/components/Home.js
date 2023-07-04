import { useEffect, useState } from "react";
import TempCard from "./tempCard";
import key from "../key";
import InfoGrid from "./infoGrid";
import Forecasts from "./forcasts";
import Spinner from "./Spinner";
import { noInternet } from "./utilityFunctions";
export default function Home() {
  

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const [state, setState] = useState({
    temp: 0,
    currentCity: "",
    city: "",
    country: "",
    icon: "",
    mainDesc: "",
    description: "",
    wSpeed: 0,
    humidity: 0,
    pressure: 0,
    visibility: 0
  });

  const d = new Date().toDateString();

  let data;
  let res;

  async function getData(city) {
    setLoading(true)
    res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    data = await res.json();
    setResponse(res.ok)
    response && setLoading(false)
    !response && setTimeout(()=>{setLoading(false)}, 3000)
    const tempData = data.main.temp;
    const currentCity = data.name;
    const country = data.sys.country;
    const icon = data.weather[0].icon;
    const mainDesc = data.weather[0].main;
    const desc = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const visibility = data.visibility;
    setState((prev) => {
      return {
        ...prev,
        temp: tempData,
        currentCity: currentCity,
        country: country,
        icon: icon,
        mainDesc: mainDesc,
        description: desc,
        wSpeed: windSpeed,
        pressure: pressure,
        humidity: humidity,
        visibility: visibility,
      };
    });
    setLoading(false)
  }
  !navigator.onLine && noInternet()

  state.currentCity.length > 1 && sessionStorage.setItem("preserve_search", state.currentCity)
  let ss = sessionStorage.getItem("preserve_search")
  let lc = localStorage.getItem("saved_location");

  useEffect(() => {
    if (!ss && !lc) {
      getData("london")
    }
    if (!ss) {
      getData(lc)
    } else if (ss) {
      getData(ss)
    }
  }, []);

  function change(event) {
    const { value, name } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }


  function search(event) {
    event.preventDefault();
    getData(state.city);
  }

  return (
    <>
      {
        loading ? <Spinner /> :
      <div className="m-2">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search..."
            name="city"
            value={state.city}
            onChange={change}
            className="w-1/2 rounded-md block mx-auto p-2 bg-slate-400 outline-none placeholder:text-white focus:bg-white focus:outline-blue-300"
          />
        </form>
        <div className="flex justify-between items-center">
          <p className="font-bold text-right text-lg mt-4 mr-4 border-l-4 border-blue-600 pl-1">
            {d}
          </p>
          <p className="font-bold text-right text-2xl mt-4 mr-4 bg-blue-600 text-white p-2 rounded-md">
            {state.currentCity} <span className="text-[0.8rem]">{state.country}</span>
          </p>
        </div>
        <h2 className="font-medium mt-6">Today's Overview</h2>
        <TempCard state={state} />
        <InfoGrid state={state} />
        <Forecasts state={state} />
      </div>
      }
    </>
  );
}

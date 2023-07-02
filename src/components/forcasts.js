import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import key from "../key";
import { useEffect, useState } from "react";
import { Today, next, next2, next3 } from "./utilityFunctions";
import OtherForeCasts from "./OtherForeCasts";
export default function Forecasts(props) {
  const state = props.state;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state.currentCity}&appid=${key}&units=metric`;
  const [data, setData] = useState({
    array: [],
    next1: [],
    next2: [],
    next3: [],
    next4: []
  });

  async function forecasts() {
    let response = await fetch(forecastUrl);
    let dataList = await response.json();
    let modArr = dataList.list.filter((item) => {
      return item.dt_txt.includes(Today);
    });
    let modArr2 = dataList.list.filter((item) => {
      return item.dt_txt.includes(next);
    });
    let modArr3 = dataList.list.filter((item) => {
      return item.dt_txt.includes(next2);
    });
    let modArr4 = dataList.list.filter((item) => {
      return item.dt_txt.includes(next3);
    });
    setData((prev) => {
      return { ...prev, array: modArr, next1: modArr2, next2: modArr3, next3: modArr4 };
    });
  }
  useEffect(() => {
    forecasts();
  }, [state.currentCity]);

  let lsMode = localStorage.getItem("pref_light");


  return (
    <div className="mb-20 md:mb-[6rem] md:mx-12">
      <h3 className="text-blue-500 ml-4 font-bold text-md underline">
        Forcasts
        <span className="ml-[4px]">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </h3>
      <h2 className="p-3 text-md font-bold mt-5">
        Today:
      </h2>
      <div className="overflow-x-auto rounded-xl p-4 flex justify-left space-x-3">
        {data.array.length > 0 &&
          data.array.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-md border-2 border-blue-500 p-3 text-center w-[40%]"
              >
                <p className="font-bold">{item.dt_txt.slice(10, 16)}</p>
                <img
                  className="w-12 h-12 block mx-auto"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />
                <p className="text-sm">{item.main.temp} °C</p>
              </div>
            );
          })}
      </div>
      <OtherForeCasts data={data} />
    </div>
  );
}

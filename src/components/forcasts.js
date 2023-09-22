import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import key from "../key";
import { useEffect, useState } from "react";
import { Today, next, next2, next3 } from "./utilityFunctions";
import OtherForeCasts from "./OtherForeCasts";
import Carousel from "./Carousel";
import DateHeader from "./DataHeader";
export default function Forecasts(props) {
  const state = props.state;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state.currentCity}&appid=${key}&units=metric`;
  const [data, setData] = useState({
    array: [],
    next1: [],
    next2: [],
    next3: [],
  });

  async function forecasts() {
    let ctrl = new AbortController();
    let timeout = setTimeout(() => {
      ctrl.abort();
    }, 9000);
    let response = await fetch(forecastUrl, { signal: ctrl.signal });
    clearTimeout(timeout);
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
      return {
        ...prev,
        array: modArr,
        next1: modArr2,
        next2: modArr3,
        next3: modArr4,
      };
    });
  }
  useEffect(() => {
    forecasts();
  }, [state.currentCity]);

  return (
    <div className="mb-20 md:mb-[6rem] md:mx-12">
      <h3 className="text-blue-500 ml-4 mb-2 font-bold text-md underline">
        Forecasts
        <span className="ml-[4px]">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </h3>
      <DateHeader text={"Today"} />
      <Carousel data={data.array} />
      <OtherForeCasts data={data} />
    </div>
  );
}

import { next, next2, next3 } from "./utilityFunctions";
export default function OtherForeCasts(props) {
  const data = props.data;
  let lsMode = localStorage.getItem("pref_light");

  return (
    <>
      <p className="p-3 text-md font-bold">{next}:</p>
      <div className="overflow-x-auto rounded-xl p-4 flex justify-left space-x-3 mt-2">
        {data.next1.length > 0 &&
          data.next1.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-md border-2 border-blue-500 p-3 text-center md:w-[7rem]"
              >
                <p className="font-bold">{item.dt_txt.slice(10, 16)}</p>
                <img
                  className="w-12 h-12 block mx-auto"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />
                <p className={`text-sm ${lsMode === "false" && "dark-text"} `}>{item.main.temp} °C</p>
              </div>
            );
          })}
      </div>

      <p className="p-3 text-md font-bold">{next2}:</p>
      <div className="overflow-x-auto rounded-xl p-4 flex justify-left space-x-3 mt-2">
        {data.next2.length > 0 &&
          data.next2.map((item, i) => {
              return (
                  <div
                  key={i}
                  className="rounded-md border-2 border-blue-500 p-3 text-center md:w-[7rem]"
                  >
                <p className="font-bold">{item.dt_txt.slice(10, 16)}</p>
                <img
                  className="w-12 h-12 block mx-auto"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />
                <p className={`text-sm ${lsMode === "false" && "dark-text"} `}>{item.main.temp} °C</p>
              </div>
            );
        })}
      </div>

        <p className="p-3 text-md font-bold">{next3}:</p>
      <div className="overflow-x-auto rounded-xl p-4 flex justify-left space-x-3 mt-2">
        {data.next3.length > 0 &&
          data.next3.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-md border-2 border-blue-500 p-3 text-center md:w-[7rem]"
              >
                <p className="font-bold">{item.dt_txt.slice(10, 16)}</p>
                <img
                  className="w-12 h-12 block mx-auto"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />
                <p className={`text-sm ${lsMode === "false" && "dark-text"} `}>{item.main.temp} °C</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

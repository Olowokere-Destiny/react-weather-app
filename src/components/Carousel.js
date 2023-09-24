import { InlineSpinner } from "./Spinner";

export default function Carousel({data}) {
  return (
    <div className="overflow-x-auto sm:p-4 p-2 flex justify-left space-x-3 lg:justify-center">
      {data.length < 1 ? (
        <InlineSpinner />
      ) : (
        data.length > 0 &&
        data.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-md border-2 border-blue-500 p-3 text-center grow-0 shrink-0 w-[5rem] md:w-[6rem]"
            >
              <p className="font-bold">{item.dt_txt.slice(10, 16)}</p>
              <img
                className="w-12 h-12 block mx-auto"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weather"
              />
              <p className="text-sm">{item.main.temp} °C</p>
            </div>
          );
        })
      )}
    </div>
  );
}

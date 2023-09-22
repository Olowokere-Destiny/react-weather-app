import { InlineSpinner } from "./Spinner";

export default function Carousel({data}) {
  return (
    <div className="overflow-x-auto rounded-xl sm:p-4 p-2 flex justify-left lg:justify-center space-x-3">
      {data.length < 1 ? (
        <InlineSpinner />
      ) : (
        data.length > 0 &&
        data.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-md border-2 border-blue-500 p-3 text-center w-[40%] md:w-[7rem]"
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet, faLightbulb, faCloud } from "@fortawesome/free-solid-svg-icons";

export default function InfoGrid(props) {
  const state = props.state;

  return (
    <div className="grid grid-cols-2 m-8 gap-4 mx-auto md:w-3/5">

      <div className="border border-blue-500 p-2 rounded-lg flex justify-evenly gap-x-2 items-center">
        <div>
          <span className="text-[1.2rem] text-blue-400"><FontAwesomeIcon icon={faWind} /></span>
        </div>
        <div className="text-center">
            <h1 className="text-[0.8rem]">Wind Speed</h1>
            <h1 className="text-lg">{state.wSpeed} m/s</h1>
        </div>
      </div>

      <div className="border border-blue-500 p-2 rounded-lg flex justify-evenly gap-x-2 items-center">
        <div>
          <span className="text-[1.2rem] text-blue-400"><FontAwesomeIcon icon={faDroplet} /></span>
        </div>
        <div className="text-center">
            <h1 className="text-[0.8rem]">Humidity</h1>
            <h1 className="text-lg">{state.humidity} %</h1>
        </div>
      </div>

      <div className="border border-blue-500 p-2 rounded-lg flex justify-evenly gap-x-2 items-center">
        <div>
          <span className="text-[1.2rem] text-blue-400"><FontAwesomeIcon icon={faLightbulb} /></span>
        </div>
        <div className="text-center">
            <h1 className="text-[0.8rem]">Pressure</h1>
            <h1 className="text-lg">{state.pressure} hPa</h1>
        </div>
      </div>

      <div className="border border-blue-500 p-2 rounded-lg flex justify-evenly gap-x-2 items-center">
        <div>
          <span className="text-[1.2rem] text-blue-400"><FontAwesomeIcon icon={faCloud} /></span>
        </div>
        <div className="text-center">
            <h1 className="text-[0.8rem]">Visibility</h1>
            <h1 className="text-lg">{state.visibility} m</h1>
        </div>
      </div>

    </div>
  );
}

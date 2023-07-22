import { useState, useEffect } from "react";

export default function TempCard(props) {
    const state = props.state;
    const [backgroundColor, setBackgroundColor] = useState('');
    useEffect(() => {
      const checkBg = () => {
        const bodyTextColor = window.getComputedStyle(document.body).color;
        const isBodyTextWhite = bodyTextColor === 'rgb(255, 255, 255)';
        const newBackgroundColor = isBodyTextWhite ? 'bg-[#191919]' : 'bg-white';
        setBackgroundColor(newBackgroundColor);
      };
      checkBg();
      const handlePopState = () => {
        checkBg();
      };
      window.addEventListener('popstate', handlePopState);
        return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }, []);

    const iconUrl = `http://openweathermap.org/img/wn/${state.icon}.png`;
  return (
    <>
      <div className={`shadow-2xl rounded-lg mx-auto w-3/5 h-[14rem] m-4 md:w-1/2 flex flex-col md:flex-row text-center items-center md:justify-around ${backgroundColor}`}>
        <div>          <img src={iconUrl} className="block mx-auto h-24 w-24" />
        </div>
        <div>
          <h1 className="text-[2rem] font-semibold">{state.temp}°C</h1>
          <h1 className="font-semibold text-md">{state.mainDesc}</h1>
          <h1 className="capitalize italic">{state.description}</h1>
        </div>
      </div>
    </>
  );
}

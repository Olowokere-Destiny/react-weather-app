import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
export default function Spinner() {
  const [timing, setTiming] = useState(10);
  useEffect(() => {
    const interv = setInterval(() => {
      if (timing > 0) {
        setTiming((prevTiming) => prevTiming - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interv);
    };
  }, [timing]);
  return (
    <div className="text-center h-screen flex items-center justify-center">
      {timing === 0 ? (
          <p className="font-bold text-[1rem]">No data. Try again</p>
          ) : (
          <BeatLoader color={"#3b82f6"} />
      )}
    </div>
  );
}
export function InlineSpinner() {
  const [timing, setTiming] = useState(10);
  useEffect(() => {
    const interv = setInterval(() => {
      if (timing > 0) {
        setTiming((prevTiming) => prevTiming - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interv);
    };
  }, [timing]);
  return (
    <div className="w-full text-center overflow-hidden text-[0.8rem]">
      {timing === 0 ? (
        <p className="font-bold text-[0.85rem]">No data. Try again later</p>
      ) : (
        <BeatLoader color={"#3b82f6"} />
      )}
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import errorimg from "./404img.svg";
export default function Error() {
  const navigate = useNavigate();
  function back() {
    navigate("..", {replace: true, relative: "path"});
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[2rem] font-bold">Page not found!</h1>
      <img src={errorimg} className="block mx-auto h-[70%]" alt="error" />
      <button
        onClick={back}
        className="p-4 rounded-md bg-blue-400 text-center block font-bold text-white back-btn"
      >
        GO BACK
      </button>
    </div>
  );
}

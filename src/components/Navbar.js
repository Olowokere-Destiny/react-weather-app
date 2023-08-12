import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLocationDot,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center">
      <div className="h-16 md:w-4/5 md:rounded-lg md:mx-auto bg-blue-400 w-screen fixed md:bottom-2 bottom-0 flex justify-around items-center gap-x-3 z-40">
        <div>
          <NavLink to="/" className={({isActive})=> isActive ? "text-white active-dot" : "text-white"}>
            <FontAwesomeIcon icon={faHome} size="2x" />
          </NavLink>
        </div>
        <div>
          <NavLink to="savelocation" className={({isActive})=> isActive ? "text-white active-dot" : "text-white"}>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2x"
            />
          </NavLink>
        </div>
        <div>
          <NavLink to="settings" className={({isActive})=> isActive ? "text-white active-dot" : "text-white"}>
            <FontAwesomeIcon icon={faGear} size="2x" />
          </NavLink>
        </div>
      </div>

      </div>
      <Outlet />
    </>
  );
}

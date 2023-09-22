import { toggle } from "./settingsAction";

function setLs(mode) {
  localStorage.setItem("pref_light", mode);
}
function getLs() {
  let lsMode;
  let get = localStorage.getItem("pref_light");
  if(!get) {
    lsMode = true
  } else if (get) {
    lsMode = JSON.parse(get)
  }
  return lsMode
}
const theme = {
  mode: getLs(),
};

console.log(getLs())

const settingsReducer = (state = theme, action) => {
  setLs(JSON.stringify(theme.mode));
  if (action.type === toggle) {
    return {
      mode: !state.mode,
    };
  } else {
    return state;
  }
};

export default settingsReducer;
const { createSlice } = require("@reduxjs/toolkit");

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

const settingsSlice = createSlice({
  name: "toggle",
  initialState: theme,
  reducers: {
    changeTheme: state => {
      state.mode = !state.mode
      setLs(state.mode)
    }
  }
})

export const { changeTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
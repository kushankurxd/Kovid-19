import * as actionTypes from "./actionTypes";

const initialState = {
  darkTheme: false,
};

const darkThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DARK_THEME:
      return { darkTheme: true };
    case actionTypes.SET_LIGHT_THEME:
      return { darkTheme: false };
    default:
      return state;
  }
};

export default darkThemeReducer;

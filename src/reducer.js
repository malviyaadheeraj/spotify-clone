export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAUkENrjr7iGBHzm3Is_lsziofOdxhrgYpNf-YBhzxMPFgXLAFXY1m54IQNkAK0XpraVr2u14kPWIEzk6JOmcQlKF0gkrav0U_tDdKCkBDFqOWwRoWKal0vEyVaDkxxEBrRk9YiiQT4VeCbvTvKTsb1EKUbPiI",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;

import { GET_POPULAR_MOVIES } from "./types";

export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data,
    });
  } catch (err) {}
};
s;

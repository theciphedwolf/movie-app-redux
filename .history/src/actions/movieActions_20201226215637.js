import { GET_MOVIES } from "./types";

export const getMovies = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_GENRE,
      payload: data,
    });
  } catch (err) {}
};
s;

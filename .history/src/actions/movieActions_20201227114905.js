import { GET_POPULAR_MOVIES } from "./types";

export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=44cce3d2400cccc7cb41aba6128cb80a&language=en-US&page=1"
    );
    const data = await res.json();

    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data,
    });
  } catch (err) {}
};
s;

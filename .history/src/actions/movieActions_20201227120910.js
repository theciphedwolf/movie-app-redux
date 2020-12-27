import { GET_POPULAR_MOVIES } from "./types";

export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MDB_APIKEY}&language=en-US&page=1`
    );
    const data = await res.json();

    console.log(data.results);

    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data.results,
    });
  } catch (err) {}
};

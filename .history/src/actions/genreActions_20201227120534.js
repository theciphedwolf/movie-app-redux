import { GET_GENRES } from "./types";

export const getGenres = () => async (dispatch) => {
  try {
    console.log(process.env.REACT_APP_MDB_APIKEY);
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MDB_APIKEY}&language=en-US`
    );
    const data = await res.json();

    dispatch({
      type: GET_GENRES,
      payload: data,
    });
  } catch (err) {}
};

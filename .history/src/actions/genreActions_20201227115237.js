import { GET_GENRES } from "./types";

export const getGenres = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=44cce3d2400cccc7cb41aba6128cb80a&language=en-US"
    );
    const data = await res.json();

    dispatch({
      type: GET_GENRES,
      payload: { name: "genre" },
    });
  } catch (err) {}
};

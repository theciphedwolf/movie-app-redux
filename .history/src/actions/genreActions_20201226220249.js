import { GET_GENRES } from "./types";

export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_GENRES,
      payload: data,
    });
  } catch (err) {}
};
s;

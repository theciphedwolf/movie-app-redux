import { GET_GENRES } from "./types";

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_GENREs,
      payload: data,
    });
  } catch (err) {}
};
s;

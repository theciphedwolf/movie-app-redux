import { GET_MOVIES } from "../actions/types";

const initialState = {
  movies: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

import { GET_POPULAR_MOVIES } from "../actions/types";

const initialState = {
  movies: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

import { GET_GENRES } from "../actions/types";

const initialState = {
  genres: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

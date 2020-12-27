import { GET_MOVIES } from "../actions/types";

const initialState = {
  logs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

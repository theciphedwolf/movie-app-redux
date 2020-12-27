import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  genre: genreReducer,
  movie: movieReducer,
});

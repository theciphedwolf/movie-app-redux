import "./App.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getGenres } from "./actions/genreActions";
import { getPopularMovies } from "./actions/movieActions";

function App({ genres, movies, getPopularMovies, getGenres }) {
  useEffect(() => {
    getGenres();
    getPopularMovies();
  });

  return <div className="App"></div>;
}

const mapStateToProps = (state) => (
  console.log(state);
  {
  
  genres: state.genres,
  movies: state.movies,
});

export default connect(mapStateToProps, { getGenres, getPopularMovies })(App);

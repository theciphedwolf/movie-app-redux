import "./App.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getGenres } from "./actions/genreActions";

function App({ genres, movies, getPopularMovies, getGenres }) {
  useEffect(() => {
    getGenres();
  });

  return <div className="App"></div>;
}

const mapStateToProps = (state) => ({
  genres: state.genres,
});

export default connect(mapStateToProps, { getGenres })(App);

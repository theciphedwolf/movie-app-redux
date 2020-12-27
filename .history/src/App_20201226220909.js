import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getGenres } from "./actions/genreActions";

function App({ log: {}, getGenres }) {
  useEffect(() => {
    getGenres();
  });

  return <div className="App"></div>;
}

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getGenres })(App);

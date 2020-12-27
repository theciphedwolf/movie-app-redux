import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getGenres } from "./actions/genreActions";

function App() {
  useEffect(() => {
    getGenres();
  });

  return <div className="App"></div>;
}

Logs;
export default connect(mapStateToProps, { getLogs })(App);

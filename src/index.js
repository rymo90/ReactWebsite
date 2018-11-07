import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Image from "./components/Image";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Image />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

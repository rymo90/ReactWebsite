import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Image from "./components/Image";
import News from "./components/News";
import Video from "./components/Video";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />

        <News />
        <Video />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

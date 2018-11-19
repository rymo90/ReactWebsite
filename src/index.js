import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Image from "./components/Image";
import News from "./components/News";
import Video from "./components/Video";
import SideBar from "./components/sidebar";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <SideBar />

          <Home />
        </div>

        <Video />
        <News />
        <News />
        <News />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

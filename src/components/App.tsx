import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/App.css";
import GameItems from "./GameItems";
import PlayerItems from "./PlayerItems";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GameItems/>
          <PlayerItems/>
        </div>
      </Provider>
    );
  }
}

export default App;

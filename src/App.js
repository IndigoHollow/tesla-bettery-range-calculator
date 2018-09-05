import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import TeslaBattery from "./containers/TeslaBattery.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery />
      </div>
    );
  }
}

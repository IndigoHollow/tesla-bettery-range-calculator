import React from "react";
import "./TeslaBattery.css";
import TeslaCar from "../components/TeslaCar/TeslaCar.js";
import TeslaNotice from "../components/TeslaNotice/TeslaNotice.js";

class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range per charge</h1>
        <TeslaCar wheelsize={19} />
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;

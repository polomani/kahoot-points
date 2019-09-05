import React, { Component } from "react";
import "../styles//Label.css";

class Label extends Component {
  public render() {
    return (
      <div className="label fancyBoldFont">
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Label;

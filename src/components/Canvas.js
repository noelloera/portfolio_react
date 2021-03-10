import React from "react";
import "../helpers/canvas.css";

//Will hold the canvas component
export default class Canvas extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "../helpers/canvas.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return <div></div>;
  }
}

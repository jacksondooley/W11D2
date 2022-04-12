import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content")

  const Root = () => {
    return (<h1>Todos App</h1>)
  }

  ReactDOM.render(<Root/>, content)
})
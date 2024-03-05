import React from "react";
import ReactDOM  from "react-dom/client";
const heading_1 = React.createElement("h1",{},"This is heading 1");
const heading_2 = React.createElement("h2",{},"This is heading 2");
const child_1 = React.createElement("div",{},[heading_1,heading_2])
const heading_12 = React.createElement("h1",{},"This is heading 12");
const heading_22 = React.createElement("h2",{},"This is heading 22");
const child_12 = React.createElement("div",{},[heading_12,heading_22]);
const parent = React.createElement("div",{},[child_1,child_12]);

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
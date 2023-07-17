import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    abc: "sks",
  },
  "Hi Frommmm React Test"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi from child 1 "),
    React.createElement("h1", {}, "Hi from child 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi from child 1 "),
    React.createElement("h1", {}, "Hi from child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root.render(parent));

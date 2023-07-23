import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hi from JSX</h1>;

const test = (
  <>
    <h1>hi</h1>
    <h2>there</h2>
  </>
);

// const HeadingComponent = () => {
//   return "Hi this is Namaste React";
// };

//component composition
const HeadingComponent = () => <h1>Heading Component</h1>;

const ComponentComposition = () => (
  <>
    <HeadingComponent />
    <>
      <h1>hi</h1>
    </>
    <h2>Welcome</h2>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponentComposition />);

console.log(HeadingComponent);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     abc: "sks",
//   },
//   "Hi Frommmm React Test"
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi from child 1 "),
//     React.createElement("h1", {}, "Hi from child 2"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi from child 1 "),
//     React.createElement("h1", {}, "Hi from child 2"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root.render(parent));

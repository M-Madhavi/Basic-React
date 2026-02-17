//create a nested element using React.createElement() method and render it to the DOM using ReactDOM.createRoot() method.

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h2",
      { id: "heading2" },
      "Nested Element using React.createElement()",
    ),
    React.createElement(
      "h2",
      { id: "heading2" },
      "second Nested Element using React.createElement()",
    ),
  ]),
);

console.log(parent);
const nested = ReactDOM.createRoot(document.getElementById("root"));
nested.render(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", XYZ: "ABC" },
  "Hello From REACT!!!",
);
console.log(heading); // React.createElement() is used to create a React element. It takes three arguments: the type of element, the props, and the children. In this case, we are creating an h1 element with an id of "heading" and a custom attribute XYZ with a value of "ABC". The content of the h1 element is "Hello From REACT!!!". The console.log() statement will output the React element object to the console.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

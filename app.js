const heading = React.createElement(
  "h1",
  { id: "heading", XYZ: "ABC" },
  "Hello From REACT!!!",
);
console.log(heading); // React.createElement() is used to create a React element. It takes three arguments: the type of element, the props, and the children. In this case, we are creating an h1 element with an id of "heading" and a custom attribute XYZ with a value of "ABC". The content of the h1 element is "Hello From REACT!!!". The console.log() statement will output the React element object to the console.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

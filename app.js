const heading = React.createElement("h1",
    { id: "heading", XYZ: "ABC" },
    "Hello From REACT!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
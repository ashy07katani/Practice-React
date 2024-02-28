const parent = React.createElement(
  "div",
  { class: "parent" },
  [React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "heading" }, "This is a H1 heading"),
    React.createElement("h2", {class: "heading2"}, "This is a H2 Heading"),
  ]),
  React.createElement("div", { class: "child1" }, [
    React.createElement("h1", { class: "heading1" }, "This is a H1 heading"),
    React.createElement("h2", {class: "heading12"}, "This is a H2 Heading"),
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

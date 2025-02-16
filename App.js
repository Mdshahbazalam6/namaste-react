import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",{
    id: "title",
}, "Hello world");

ReactDOM.createRoot(document.getElementById("root")).render(element);
import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement ==> Object ==> HTML(DOM)
const element = React.createElement("h1",{
    id: "title",
}, "Hello world");

// JSX ==> React.createElement ==> Object ==> HTML(DOM)
// Babel converts JSX to React.createElement

const heading = (
    <h1 id="headnig" className="">Namaste React</h1>
)

const HeaderComponent = () => {
    return heading;
}

ReactDOM.createRoot(document.getElementById("root")).render(<HeaderComponent />);
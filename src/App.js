import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// React.createElement ==> Object ==> HTML(DOM)
// JSX ==> React.createElement ==> Object ==> HTML(DOM)
// Babel converts JSX to React.createElement

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
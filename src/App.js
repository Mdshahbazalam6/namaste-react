import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestarauntMenu from "./Components/RestarauntMenu";

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
            <Outlet />
            <Footer />
        </React.Fragment>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
        
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: "/restaurant/:id",
                element: <RestarauntMenu />,
                errorElement: <Error />
            },
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);
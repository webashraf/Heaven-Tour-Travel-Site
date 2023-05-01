import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Components/Booking/Booking";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "booking",
                element: <Booking></Booking>
            }
        ]
    }
])
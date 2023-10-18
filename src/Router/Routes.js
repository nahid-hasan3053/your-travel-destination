import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import MyReview from "../Pages/MyReview/MyReview";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/allservices',
            element: <AllServices></AllServices>,
            loader: ()=>fetch('https://travel-destination-server-nahid-hasan3053.vercel.app/allservices')
        },
        {
            path: '/serviceDetails/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ({params})=> fetch(`https://travel-destination-server-nahid-hasan3053.vercel.app/service/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addservice',
            element: <AddService></AddService>
        },
        {
            path: '/myreview',
            element: <MyReview></MyReview>
        }
    ]}
])
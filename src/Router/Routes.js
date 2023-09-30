import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/allservices',
            element: <AllServices></AllServices>,
            loader: ()=>fetch('http://localhost:5000/allservices')
        },
        {
            path: '/serviceDetails/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]}
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddServices/AddService";
import Blog from "../../Pages/Blog/Blog";

import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PageNotFound404 from "../../Pages/PageNotFound404/PageNotFound404";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/Services/AllServices";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/main-dishes',
                element: <AllServices></AllServices>
            },
            {
                path: '/main-dishes3',
                element: <Services></Services>
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
                path: '/profile',
                element: <Profile></Profile>
            },
            
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://star-cloud-kitchen-server.vercel.app/main-dishes/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound404></PageNotFound404>
    }


]);

export default router;
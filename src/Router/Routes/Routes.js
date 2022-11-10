import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PageNotFound404 from "../../Pages/PageNotFound404/PageNotFound404";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
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
        ]
    },
    {
        path: '*',
        element: <PageNotFound404></PageNotFound404>
    }


]);

export default router;
import Blogs from "../components/Blogs";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import LogIn from "../components/LogIn";
import Premium from "../components/Premium";
import Register from "../components/Register";
import Sidebar from "../components/sidebar";
import PrivateRoute from "../shared/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home");
const { default: ErrorPage } = require("../shared/ErrorPage");
const { default: Main } = require("../shared/Main");

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/', 
            element: <Home></Home>,
        },
        {
            path: '/home', 
            element: <Home></Home>,
        },
        {
            path: '/courses',
            loader: ()=>fetch(`https://assignment-10-server-sabbir-123.vercel.app/blockchain`),
            element: <Courses></Courses>,
        },
        {
            path: '/blockchain/:id',
            loader: ({params})=>fetch(`https://assignment-10-server-sabbir-123.vercel.app/blockchain/${params.id}`),
            element: <CourseDetails></CourseDetails>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <LogIn></LogIn>,
        },
        {
            path: '/blog',
            element: <Blogs></Blogs>,
        },
        {
            path: '/faq',
            element: <FAQ></FAQ>,
        },
        {
            path: '/premium/:id',
            loader: ({params})=>fetch (`https://assignment-10-server-sabbir-123.vercel.app/premium/${params.id}`),
            element: <PrivateRoute><Premium></Premium></PrivateRoute>,
        },


    ]
}])
export default router;
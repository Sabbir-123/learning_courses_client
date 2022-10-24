import Sidebar from "../components/sidebar";

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
            loader: ()=> fetch('http://localhost:5000/blockchain')
        },
        {
            path: '/category/:id',
            element: <Sidebar></Sidebar>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },


    ]
}])
export default router;
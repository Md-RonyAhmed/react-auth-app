import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import User from "../pages/User";
import Products from "../components/Products";
import Home from "../pages/Home";

const routes= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"products",
                element:<Products/>,
                loader: ()=> fetch("https://tech-net-server-lilac.vercel.app/products")
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"user",
                element:<User/>
            },

        ]
    },
    {
        path:"*",
        element:<NotFound/>
    }
])

export default routes
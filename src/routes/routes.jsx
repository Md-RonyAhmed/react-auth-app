import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Products from "../components/Products";
import Home from "../pages/Home";
import Contact from "../components/Contact";
import RegistrationForm from "../components/auth/RegistrationForm";
import LoginForm from "../components/auth/LoginForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        loader: () =>
          fetch("https://tech-net-server-lilac.vercel.app/products"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <RegistrationForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

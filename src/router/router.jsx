import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import CarShop from "../Pages/CarShop";
import CarDetails from "../Pages/CarDetails";
import Register from "../Pages/Register";
import Update from "../Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/brands/:brand_name",
        element: <CarShop />,
      },
      {
        path: "/cars/:id",
        element: <CarDetails />,
      },
      {
        path: "/cars/update/:id",
        element: <Update />,
      },
    ],
  },
]);

export default router;

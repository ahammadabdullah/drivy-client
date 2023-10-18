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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/cars/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

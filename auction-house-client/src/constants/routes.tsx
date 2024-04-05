import Test from "../components/Test";
import AdminLayout from "../layouts/AdminLayout";
import HomeLayout from "../layouts/HomeLayout";
import Auction from "../pages/admin/Auction";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import Report from "../pages/admin/Report";
import User from "../pages/admin/User";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Test />,
        path: "/test",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/admin/dashboard",
      },
      {
        element: <Product />,
        path: "/admin/product",
      },
      {
        element: <Report />,
        path: "/admin/report",
      },
      {
        element: <Auction />,
        path: "/admin/auction",
      },
      {
        element: <User />,
        path: "/admin/user",
      },
    ],
  },
];

export default routes;

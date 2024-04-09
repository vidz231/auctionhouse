import Test from "../components/Test";
import AdminLayout from "../layouts/AdminLayout";
import HomeLayout from "../layouts/HomeLayout";
import Auction from "../pages/admin/Auction";
import CreateProduct from "../pages/admin/components/CreateProduct";
import ProductTable from "../pages/admin/components/ProductTable";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import Report from "../pages/admin/Report";
import User from "../pages/admin/User";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetail from "../pages/product/Product";
import AuctionDetail from "./../pages/auction/Auction";
import Search from "../pages/search/Search";
import Shop from "../pages/shop/Shop";

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
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/auction",
        element: <AuctionDetail />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/shop/:id",
        element: <Shop />,
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
        path: "/admin/",
      },
      {
        element: <Product />,
        path: "/admin/product",
        children: [
          {
            element: <ProductTable />,
            path: "/admin/product/",
          },
          {
            element: <CreateProduct />,
            path: "/admin/product/create",
          },
        ],
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

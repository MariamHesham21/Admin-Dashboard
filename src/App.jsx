import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MenuSide from "./components/menuSide/MenuSide";
import Login from "./pages/login/Login";

const App = () => {
  const Layout = () => {
    return (
      <div className="main-app-container">
        <Navbar />
        <div className="change-container">
          <div className="menu-container">
            <MenuSide />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  // {
  //   path: "users",
  //   element: <Users />,
  // },
  // {
  //   path: "products",
  //   element: <Products />,
  // },
  // ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

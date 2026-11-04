import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import ShimmerUI from "./components/ShimmerUI.jsx";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import Error from "./components/Error.jsx";
import Cart from "./pages/Cart.jsx";

const AppLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/resMenu/:resId",
        element: <RestaurantMenu />,
      },
      ,
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

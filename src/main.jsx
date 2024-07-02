import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import ErrorPages from "./routes/ErrorPages.jsx";
import Home from "./routes/Home.jsx";
import ShopAll from "./routes/ShopAll.jsx";
import Blog from "./routes/Blog.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import Product from "./routes/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop-all",
        element: <ShopAll />,
      },
      {
        path: "shop-all/:id",
        element: <Product />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={router} />
  </Provider>
);

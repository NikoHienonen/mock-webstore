import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Landing from "./views/Landing";
import { Provider } from "react-redux";
import { store } from "./store";

import ProductsView from "./views/Products";
import MainLayout from "./Layouts/MainLayout";
import ProductDetailsView from "./views/ProductDetails";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/products",
        element: <ProductsView />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsView />,
      },
    ],
  },
  {
    path: "/",
    element: <Landing />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

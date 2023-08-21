import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/remote";
import DynamicPage from "./pages/remote/$id";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apps/*", element: <DynamicPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("remote");
const root = createRoot(container!);
root.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);

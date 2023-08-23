import { createRoot } from "react-dom/client";
import React from "react";

import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { MicrofrontendProvider } from "./context/micro-frontends.context";

import Microfrontend from "./components/micro-frontend";

const Link = ({ to }: { to: string }) => (
  <NavLink to={to} style={{ margin: "1rem" }}>
    <button>{to}</button>
  </NavLink>
);

const microfrontendUrls = {
  remote: process.env.REACT_APP_MICROFRONTEND_BUCKET!,
};

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <MicrofrontendProvider
    values={{
      ["remote"]: {
        version: "v1-0-0",
        scope: "remote",
      },
    }}
  >
    <div className="host">
      <BrowserRouter>
        <div style={{ marginBottom: "1rem" }}>
          <h1 style={{ marginBottom: "1rem" }}>Hello, I'm the host app!</h1>
          <Link to="/remote" />
          <Link to="/remote/nested-page" />
          <Link to="/remote/dynamic" />
          <Link to="/remote/dynamic/1" />
        </div>
        <Routes>
          <Route path="/" element={<div>home page container</div>} />
          <Route
            path="/remote/*"
            element={
              <Microfrontend url={microfrontendUrls.remote} microId="remote" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  </MicrofrontendProvider>
);

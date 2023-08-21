import React from "react";
import "./index.css";
import {
  LoaderFunction,
  ActionFunction,
  Route,
  Routes,
} from "react-router-dom";

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<any>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType<any>;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<any>;
  } & RouteCommon;
}

export function getPages() {
  const context = require.context("./pages", true, /\.tsx$/);
  const pages: Pages = {};

  context.keys().forEach((path: string) => {
    const parts = path.split("/");
    const fileName = parts.pop()!.replace(/\.tsx$/, "");
    const pagePath = parts.join("/");
    const component = context(path).default;

    const nestedPath = pagePath ? `${pagePath}/${fileName}` : fileName;
    pages[nestedPath] = {
      default: component,
    };
  });

  return pages;
}

const pages: Pages = getPages();

const routes: IRoute[] = [];
for (const path of Object.keys(pages)) {
  const normalizedPathName = path
    .replace(/^\.\//, "") // Remove leading './'
    .replace(/\/index$/, ""); // Remove trailing '/index'

  // Handle dynamic paths
  const dynamicPath = normalizedPathName.replace(/\$id/g, ":id");

  routes.push({
    path: dynamicPath === "index" ? "/" : `${dynamicPath.toLowerCase()}`,
    Element: pages[path].default,
  });
}

const AppRoutes = routes.map(({ Element, ...rest }) => {
  return (
    <Route
      index={rest.path === "/"}
      key={rest.path}
      path={rest.path}
      element={<Element />}
    />
  );
});

const App = () => {
  return (
    <div className="remote">
      <Routes>{AppRoutes}</Routes>
    </div>
  );
};

export default App;

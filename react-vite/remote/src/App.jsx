import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/wrapper";
import HomePage from "./pages";

const pages = import.meta.glob("./pages/**/*.{js,jsx}", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*?)(\.[^.]*$|$)/)?.[1];
  if (!fileName) {
    continue;
  }

  const isDynamic = fileName.match(/^\[.*\]$/); // Check if the folder name is in [id] format TODO
  const normalizedPathName = isDynamic
    ? `:${fileName.substring(1, fileName.length - 1)}`
    : fileName.replace(/\/?index$/, "");

  routes.push({
    path: isDynamic ? `/pages/${normalizedPathName}` : `/${normalizedPathName}`,
    Element: pages[path].default,
  });
}

const App = () => {
  return (
    <Wrapper>
      <b style={{ marginBottom: "1rem" }}>and I'm the remote app!</b>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Element />} />
        ))}
      </Routes>
    </Wrapper>
  );
};

export default App;

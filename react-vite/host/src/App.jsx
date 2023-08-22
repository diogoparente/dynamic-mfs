import RemoteApp from "remoteApp/App";
import Home from "./pages";
import { Link, Routes, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";

const StyledLink = ({ to, children }) => (
  <Link style={{ margin: "1rem" }} to={to}>
    {children}
  </Link>
);

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const App = () => {
  return (
    <Wrapper>
      <div style={{ marginBottom: "1rem" }}>
        Hello, I'm the host app!
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/apps/remote">Remote App</StyledLink>
        <StyledLink to="/apps/remote/nested">Nested Page</StyledLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/*" element={<RemoteApp />} />
      </Routes>
    </Wrapper>
  );
};

export default App;

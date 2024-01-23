import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "../layout";

const Routers = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        {routes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
      </Route>
    </Routes>
  );
};

export { Routers };

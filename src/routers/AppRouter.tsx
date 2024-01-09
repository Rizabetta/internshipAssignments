import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Routers = () => {
  return (
    <Routes>
      {routes.map((route, key) => {
        return <Route key={key} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

export { Routers };

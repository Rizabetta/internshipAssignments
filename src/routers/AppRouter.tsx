import { Routes, Route } from "react-router-dom";
import { FormClientDetails, Home } from "../pages";

export enum RouteNames {
  NOT = "*",
  HOME = "/",
  DETAILS = "/details",
}

export const routes = [
  { path: RouteNames.HOME, element: <Home /> },
  { path: RouteNames.DETAILS, element: <FormClientDetails /> },
];

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

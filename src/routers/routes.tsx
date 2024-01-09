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

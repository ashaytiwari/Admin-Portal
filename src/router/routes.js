import React from "react";
import { Navigate } from "react-router-dom";

const Login = React.lazy(() => import("../container/LandingPages/Login/Login"));
const Registration = React.lazy(() =>
  import("../container/LandingPages/Registration/Registration")
);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: <Navigate replace to={"/login"} />
  },
  {
    path: "/login",
    name: "Login",
    component: <Login />
  },
  {
    path: "/registration",
    name: "Registration",
    component: <Registration />
  }
];

export default routes;

import React from "react";
import { Navigate } from "react-router-dom";

import ErrorPage from "../container/ErrorPage/ErrorPage";
import ForgotPassword from "../container/LandingPages/ForgotPassword/ForgotPassword";
import ResetPassword from "../container/LandingPages/ResetPassword/ResetPassword";

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
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: <ForgotPassword />
  },
  {
    path: "/resetPassword/:tokenId",
    name: "ResetPassword",
    component: <ResetPassword />
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: <Dashboard />
  // },
  {
    path: "/error",
    name: "Error",
    component: <ErrorPage />
  }
];

export default routes;

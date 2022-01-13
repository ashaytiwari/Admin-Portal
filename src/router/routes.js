import React from "react";
import { Navigate } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ForgotPassword from "../pages/LandingPages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/LandingPages/ResetPassword/ResetPassword";

const Login = React.lazy(() => import("../pages/LandingPages/Login/Login"));
const Registration = React.lazy(() =>
  import("../pages/LandingPages/Registration/Registration")
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
  {
    path: "/error",
    name: "Error",
    component: <ErrorPage />
  }
];

export default routes;

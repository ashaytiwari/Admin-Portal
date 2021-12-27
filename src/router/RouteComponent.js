import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Loader from "../component/Loader/Loader";
import NotFound from "../container/NotFound/NotFound";
import Dashboard from "../container/DashboardPages/Dashboard/Dashboard";
import Hogwarts from "../container/DashboardPages/HarryPotter/Hogwarts/Hogwarts";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        {/* Common Routes */}
        {routes.map((prop, index) => (
          <Route
            key={index}
            path={prop.path}
            element={
              <React.Suspense fallback={<Loader />}>
                {prop.component}
              </React.Suspense>
            }
          />
        ))}
        {/* Common Routes */}

        {/* Dashboard Routes */}
        <Route path={"dashboard"} element={<Dashboard />}>
          <Route path={"harryPotter"} element={<Hogwarts />} />
          <Route path={"profile"} element={<h4>Profile</h4>} />
          <Route path={"settings"} element={<h4>settings</h4>} />
        </Route>
        {/* Dashboard Routes */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;

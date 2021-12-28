import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Loader from "../component/Loader/Loader";
import NotFound from "../container/NotFound/NotFound";
import Dashboard from "../container/DashboardPages/Dashboard/Dashboard";
import Hogwarts from "../container/DashboardPages/HarryPotter/Hogwarts/Hogwarts";
import Room from "../container/DashboardPages/HarryPotter/Room/Room";

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
          <Route path={"harryPotter"} element={<Hogwarts />}>
            <Route path={":roomName"} element={<Room />} />
          </Route>
        </Route>
        {/* Dashboard Routes */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;

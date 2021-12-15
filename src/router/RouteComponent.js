import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Loader from "../component/Loader/Loader";
import NotFound from "../container/NotFound/NotFound";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;

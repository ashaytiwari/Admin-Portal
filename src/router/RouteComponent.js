import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";

import Loader from "../component/Loader/Loader";

import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import Hogwarts from "../pages/DashboardPages/HarryPotter/Hogwarts/Hogwarts";
import Room from "../pages/DashboardPages/HarryPotter/Room/Room";
import BreakingBadHome from "../pages/DashboardPages/BreakingBad/BreakingBadHome/BreakingBadHome";
import BreakingBadEpisodes from "../pages/DashboardPages/BreakingBad/BreakingBadEpisodes/BreakingBadEpisodes";
import BreakingBadCharacters from "../pages/DashboardPages/BreakingBad/BreakingBadCharacters/BreakingBadCharacters";
import BreakingBadQuotes from "../pages/DashboardPages/BreakingBad/BreakingBadQuotes/BreakingBadQuotes";
import LuciferQuotes from "../pages/DashboardPages/LuciferQuotes/LuciferQuotes";
import Testimonials from "../pages/DashboardPages/Testimonials/Testimonials";
import NobelPrizesHome from "../pages/DashboardPages/NobelPrizes/NobelPrizesHome/NobelPrizesHome";
import AlfredNobel from "../pages/DashboardPages/NobelPrizes/AlfredNobel/AlfredNobel";
import NobelPrizesHistory from "pages/DashboardPages/NobelPrizes/NobelPrizesHistory/NobelPrizesHistory";
import SearchCountry from "pages/DashboardPages/SearchCountry/SearchCountry";

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
          <Route path={"breakingBad"} element={<BreakingBadHome />}>
            <Route path={"episodes"} element={<BreakingBadEpisodes />} />
            <Route path={"characters"} element={<BreakingBadCharacters />} />
            <Route path={"quotes"} element={<BreakingBadQuotes />} />
          </Route>
          <Route path={"luciferQuotes"} element={<LuciferQuotes />} />
          <Route path={"testimonials"} element={<Testimonials />} />
          <Route path={"nobelPrizes"} element={<NobelPrizesHome />}>
            <Route path={"alfred-nobel"} element={<AlfredNobel />} />
            <Route path={":id"} element={<NobelPrizesHistory />} />
          </Route>
          <Route path={"searchCountry"} element={<SearchCountry />} />
        </Route>
        {/* Dashboard Routes */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;

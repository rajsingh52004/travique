import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";
import ThingsToDo from "./pages/ThingsToDo";
import Reviews from "./pages/Reviews";
import SavedTrips from "./pages/SavedTrips";
import TripPlanner from "./pages/TripPlanner";
import NotFound from "./pages/NotFound";
import DestinationDetails from "./pages/DestinationDetails";
import Compare from "./pages/Compare";
import SmartTripBuilder from "./pages/SmartTripBuilder";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/saved-trips" element={<SavedTrips />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/destination/:id"
          element={<DestinationDetails />}
        />
        <Route path="/compare" element={<Compare />} />
        <Route
  path="/smart-trip-builder"
  element={<SmartTripBuilder />}
/>
      </Routes>
    </>
  );
}

export default App;
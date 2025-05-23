import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  // Shared search state to persist across navigation
  const [searchState, setSearchState] = useState({
    filterType: "gender",
    keyword: "",
    statusMessage: "No Records To Display",
    results: [],
    error: null,
    metrics: {
      appUsage: { avg: 0, median: 0 },
      screenOnTime: { avg: 0, median: 0 },
      appsInstalled: { avg: 0, median: 0 },
      age: { avg: 0, median: 0 },
    },
  });

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-4">
        <NavLink
          to="/"
          className="nav-link"
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: "white" })}
        >
          User Behavior Data
        </NavLink>
        <NavLink
          to="/search"
          className="nav-link ms-3"
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: "white" })}
        >
          Search Through Dataset
        </NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search"
          element={<SearchPage searchState={searchState} setSearchState={setSearchState} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

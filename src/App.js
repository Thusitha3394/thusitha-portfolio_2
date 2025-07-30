import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import ProjectDetails from "./pages/ProjectDetails.js";
import MLProjectDetails from "./pages/MLProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/ml-projects/:projectId" element={<MLProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

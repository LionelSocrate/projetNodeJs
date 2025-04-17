import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Visiteur from "../../pages/Visiteur";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/visiteur" element={<Visiteur />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Index;

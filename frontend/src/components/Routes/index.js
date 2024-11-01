import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "../../pages/Landing";
import Register from "../../pages/Register";
import About from "../../pages/About";
import ProjetAndakana from "../../pages/ProjetAndakana";
import ProjetAlakamisy from "../../pages/ProjetAlakamisy";
import Contact from "../../pages/Contact";
import Reservation from "../../pages/Reservation";
import VillaAdmin from "../../pages/VillaAdmin";
import Dashboard from "../../pages/Dashboard";
import RdvAdmin from "../../pages/RdvAdmin";
import Video3d from "../../pages/Video3d";
import UsersAdmin from "../../pages/UsersAdmin";
import Technologie from "../../pages/Technologie";
import ClientsAdmin from "../../pages/ClientsAdmin";
import LoginPage from "../../pages/LoginPage";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/villaAdmin" element={<VillaAdmin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technologie" element={<Technologie />} />
        <Route path="/video3d" element={<Video3d />} />
        <Route path="/rdvAdmin" element={<RdvAdmin />} />
        <Route path="/usersAdmin" element={<UsersAdmin />} />
        <Route path="/client" element={<ClientsAdmin />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/projetAndakana" element={<ProjetAndakana />} />
        <Route path="/projet" element={<ProjetAlakamisy />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Index;

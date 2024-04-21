import React from "react";
import { Header, Hero , UsageGuide } from "../../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/usageguide" element={<UsageGuide/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Dashboard;

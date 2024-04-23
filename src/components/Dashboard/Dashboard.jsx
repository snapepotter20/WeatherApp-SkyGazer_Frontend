import React from "react";
import { AboutUs, Header, Hero , UsageGuide , Footer } from "../../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/usageguide" element={<UsageGuide/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";

function AppRouter() {
    return (
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    );
  }
  
  export default AppRouter;
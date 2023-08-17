import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { ShopLayer } from "./stores/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ShopLayer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </ShopLayer>
  );
}

export default App;

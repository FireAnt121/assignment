import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Home />} />
            <Route exact path="/dashboard" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}




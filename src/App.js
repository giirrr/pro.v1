import "./App.css";
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/v1/employee/signin/" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;

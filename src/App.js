import "./App.css";
import React from "react";
import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import SignupForm from "./components/SignupForm";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Welcome, {user}!</h1>
          <LogoutButton onLogout={handleLogout} />
        </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <SignupForm />
        </>
      )}
    </div>
  );
}

export default App;

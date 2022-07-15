import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Pomodoro from "./pages/Pomodoro/Pomodoro";
import HabitForm from "./components/HabitForm";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import "./App.css";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";

function RequireAuth({ children, isLoggedIn }) {
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

function App() {
  const { token } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <div className="App flex md:flex-row flex-col   w-full  h-screen">
        {token && <Sidebar />}
        {token && <MobileHeader />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth isLoggedIn={token}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/analytics"
            element={
              <RequireAuth isLoggedIn={token}>
                <Analytics />
              </RequireAuth>
            }
          />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/habit" element={<HabitForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

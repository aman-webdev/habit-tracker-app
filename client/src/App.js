import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pomodoro from "./pages/Pomodoro/Pomodoro";
import HabitForm from "./components/HabitForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex  w-full  h-screen">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/createhabit" element={<HabitForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

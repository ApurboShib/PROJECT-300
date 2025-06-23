import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import StudentLogin from "./components/StudentLogin/StudentLogin";
import StudentSignup from "./components/StudentSignUp/StudentSignUp";
import "./style.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "login":
        return <StudentLogin onNavigate={setCurrentPage} />;
      case "signup":
        return <StudentSignup onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
}

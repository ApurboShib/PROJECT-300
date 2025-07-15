import { useState } from "react";
import HomePage from "./HomePage";
import StudentSignup from "./StudentSignup";
import StudentDashboard from "./StudentDashboard";
import StudentLogin from "./StudentLogin"; 

export default function AppRouter() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "signup":
        return <StudentSignup onNavigate={handleNavigate} />;
      case "login":
        return <StudentLogin onNavigate={handleNavigate} />;
      case "dashboard":
        return <StudentDashboard onNavigate={handleNavigate} />;
      case "admin-login":
        return <div>Admin Login Page (to be implemented)</div>;
      case "about":
        return <div>About Page (to be implemented)</div>;
      case "contact":
        return <div>Contact Page (to be implemented)</div>;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return <div className="app">{renderCurrentPage()}</div>;
}

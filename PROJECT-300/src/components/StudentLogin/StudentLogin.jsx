import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mu_portal_logo.png";

export default function StudentLogin({ onNavigate }) {
  const [formData, setFormData] = useState({
    student_id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful! Welcome " + data.name);
        // onNavigate("dashboard") — you can navigate somewhere here
      } else {
        alert("error " + data.error);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="MuPortal Logo" className="logo-image" />
          </div>
          <nav className="nav">
            <Link
              to="/"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
              }}
            >
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={(e) => e.preventDefault()}>
              About
            </Link>
            <Link to="/contact" className="nav-link" onClick={(e) => e.preventDefault()}>
              Contact
            </Link>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn active">Login</button>
            <button className="signup-btn" onClick={() => onNavigate("signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <main className="login-main">
        <div className="login-container">
          <div className="login-card">
            <h2 className="login-title">Student Login</h2>
            <p className="login-subtitle">
              Login to access your courses and resources
            </p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label className="form-label">Student ID</label>
                <input
                  type="text"
                  name="student_id"
                  className="form-input"
                  placeholder="e.g. 222-115-090"
                  value={formData.student_id}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="login-submit-btn">
                Login
              </button>
            </form>

            <p className="login-footer">
              Don't have an account?{" "}
              <button className="link-btn" onClick={() => onNavigate("signup")}>
                Signup
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

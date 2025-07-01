import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mu_portal_logo.png";
export default function StudentLogin({ onNavigate }) {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Login attempt:", Data);
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

            <Link
              to="/about"
              className="nav-link"
              onClick={(e) => e.preventDefault()}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="nav-link"
              onClick={(e) => e.preventDefault()}
            >
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
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={Data.email}
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
                  value={Data.password}
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

            <div className="demo-info">
              Demo Student: student@muportal.com / student123
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

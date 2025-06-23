import { useState } from "react";

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
    // Add real login logic here
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span className="logo-text">MuPortal</span>
          </div>
          <nav className="nav">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => e.preventDefault()}
            >
              About
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => e.preventDefault()}
            >
              Contact
            </a>
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

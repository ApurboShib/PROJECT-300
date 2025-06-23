import { useState } from "react";

export default function StudentSignup({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
  });

  const departments = [
    "Computer Science",
    "Electrical Engineering",
    "Business Administration",
    "Economics",
    "Law and Justice",
    "English",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="signup-page">
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
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              About
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Contact
            </a>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => onNavigate("login")}>
              Login
            </button>
            <button className="signup-btn active">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Signup Form */}
      <main className="signup-main">
        <div className="signup-container">
          <div className="signup-card">
            <h2 className="signup-title">Student Signup</h2>
            <p className="signup-subtitle">
              Create your account to access MuPortal resources
            </p>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
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

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Department</label>
                <select
                  name="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="signup-submit-btn">
                Create Account
              </button>
            </form>

            <p className="signup-footer">
              Already have an account?{" "}
              <button className="link-btn" onClick={() => onNavigate("login")}>
                Login
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

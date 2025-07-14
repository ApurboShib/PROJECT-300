import { useState } from "react";
import logo from "../../assets/mu_portal_logo.png";
export default function StudentSignup({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    student_id: "",
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

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        student_id: formData.student_id, 
        password: formData.password,
        department: formData.department,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Signup successful!");
      onNavigate("login");
    } else {
      alert(data.error || "Signup failed.");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("Something went wrong.");
  }
};


  return (
    <div className="signup-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="MuPortal Logo" className="logo-image" />
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
                <label className="form-label">Student ID</label>
                <input
                  type="text"
                  name="student_id"
                  className="form-input"
                  placeholder="e.g. 222-115-090"  
                  value={formData.student_id}
                  onChange={handleInputChange}
                  pattern="\d{3}-\d{3}-\d{3}"  // optional: validates the format
                  title="Format: 222-115-090"
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

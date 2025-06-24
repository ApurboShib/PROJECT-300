import { Link } from "react-router-dom";
export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      {/* Header with Navigation */}
      <header className="header-simple">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">MuPortal</span>
          </div>
          <nav className="nav-center">
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
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
            >
              Contact
            </Link>
          </nav>
          <div className="auth-buttons">
            <button
              className="login-btn-simple"
              onClick={() => onNavigate("login")}
            >
              Login
            </button>
            <button
              className="signup-btn-simple"
              onClick={() => onNavigate("signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            MuPortal - University Material Sharing Portal
          </h1>
          <p className="hero-subtitle">
            Access slides, sheets, resources, and results from your department
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => onNavigate("login")}
            >
              Student Login
            </button>
            <button className="hero-btn secondary">Admin Login</button>
            <button className="hero-btn secondary">Guest Access</button>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Department-Based Access</h3>
            <p className="feature-description">
              Automatically filtered content based on your department
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3 className="feature-title">Course Materials</h3>
            <p className="feature-description">
              Download slides, sheets, and access external resources
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Results & Progress</h3>
            <p className="feature-description">
              Track your academic performance and results
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

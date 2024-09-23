import React from 'react';
import { useNavigate } from 'react-router-dom';
import RotatingImages from './RotatingImages';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header>
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="FINWISE Logo" />
          <span>FINWISE</span>
        </div>
        <nav>
          <button onClick={() => navigate('/login')} className="nav-link">Log In</button>
          <button onClick={() => navigate('/signup')} className="nav-button">Sign up</button>
        </nav>
      </header>

      <main>
        <div className="hero-content">
          <h1>Less stress when managing finances</h1>
          <h2>with <span className="highlight">FINWISE</span>.</h2>
          <p>
            Keep track of your expenses, investments, and financial goals
            with ease. Perfect for individuals, families, and small
            businesses.
          </p>
          <button onClick={() => navigate('/signup')} className="cta-button">
            Get Started
          </button>
          <p className="platforms">Free for iOS, Android, and web.</p>
        </div>
        <div className="hero-image">
          <RotatingImages />
        </div>
      </main>

      <footer>
        <div className="feature">
          <h3>Track Expenses</h3>
          <p>Easily log and categorize your spending.</p>
        </div>
        <div className="feature">
          <h3>Set Budgets</h3>
          <p>Create and stick to personalized budgets.</p>
        </div>
        <div className="feature">
          <h3>Invest Wisely</h3>
          <p>Get insights on your investments and financial decisions.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
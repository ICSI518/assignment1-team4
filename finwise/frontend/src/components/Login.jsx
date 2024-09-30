import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ general: '', username: '', password: '' });

  const validateForm = () => {
    const newErrors = { general: '', username: '', password: '' };
    let isValid = true;

    if (!username && !password) {
      newErrors.general = 'Please enter your username and password.';
      isValid = false;
    } else {
      if (!username) {
        newErrors.username = 'Please enter your username.';
        isValid = false;
      }
      if (!password) {
        newErrors.password = 'Please enter your password.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Login submitted', { username, password });
    }
  };

  return (
    <div className="auth-page">
      <h1 className="auth-logo">FINWISE</h1>
      <div className="auth-content">
        <form onSubmit={handleSubmit} className="auth-form">
          {errors.general && <div className="error-message general">{errors.general}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? 'error' : ''}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="submit-btn">Sign in</button>
          <div className="form-links">
            <Link to="/forgot-password">Forgot username/password?</Link>
            <Link to="/signup">Not Enrolled? Sign Up Now.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { validateEmail, RateLimiter } from '../utils/validation';

// Client-side rate limiting
const loginRateLimiter = new RateLimiter(5, 60000); // 5 attempts per minute

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef(null);

  const redirectTo = new URLSearchParams(location.search).get('redirectTo') || '/';

  const validateForm = () => {
    const errors = {};

    // Validate email
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      errors.email = emailValidation.error;
    }

    // Basic password validation for login (not strength, just presence)
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length > 128) {
      errors.password = 'Password is too long';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});

    // Client-side validation
    if (!validateForm()) {
      return;
    }

    // Rate limiting
    if (!loginRateLimiter.canAttempt()) {
      const remainingTime = Math.ceil(loginRateLimiter.getRemainingTime() / 1000);
      setError(`Too many login attempts. Please wait ${remainingTime} seconds.`);
      return;
    }

    setLoading(true);

    try {
      loginRateLimiter.recordAttempt();

      // Call /auth/login endpoint with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const res = await fetch('http://127.0.0.1:8081/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: validateEmail(email).value, // Use sanitized email
          password
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Login failed' }));
        throw new Error(data.error || 'Login failed');
      }

      const data = await res.json();

      // Store token and email in localStorage
      if (data.token) {
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('user_email', validateEmail(email).value); // Store for session reconfirmation

        // Reset rate limiter on successful login
        loginRateLimiter.reset();

        // Redirect to original destination or home
        navigate(redirectTo);
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setError('Request timed out. Please check your connection and try again.');
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e0e0e0] flex items-center justify-center p-6">
      <div className="neumorphic-card p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Login</h1>
          <p className="text-secondary">Please sign in to continue</p>
        </div>

        {error && (
          <div className="neumorphic-inset bg-red-50 text-red-500 p-4 mb-6 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Email Address
            </label>
            <div className={`neumorphic-inset p-3 ${fieldErrors.email ? 'border-2 border-red-400' : ''}`}>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setFieldErrors(prev => ({ ...prev, email: null }));
                }}
                onBlur={() => {
                  const validation = validateEmail(email);
                  if (!validation.valid) {
                    setFieldErrors(prev => ({ ...prev, email: validation.error }));
                  }
                }}
                className="w-full bg-transparent outline-none text-primary placeholder-secondary"
                placeholder="you@example.com"
                required
                autoComplete="email"
                maxLength={254}
              />
            </div>
            {fieldErrors.email && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Password
            </label>
            <div className={`neumorphic-inset p-3 ${fieldErrors.password ? 'border-2 border-red-400' : ''}`}>
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setFieldErrors(prev => ({ ...prev, password: null }));
                }}
                className="w-full bg-transparent outline-none text-primary placeholder-secondary"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                maxLength={128}
              />
            </div>
            {fieldErrors.password && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="neumorphic-button w-full py-3 text-primary font-medium transition-all duration-200"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="text-sm text-secondary text-center mt-4">
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-primary hover:underline"
            >
              Register account
            </button>
            {' · '}
            <button
              type="button" 
              onClick={() => navigate('/forgot-password')}
              className="text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword, getPasswordStrength, RateLimiter } from '../utils/validation';

// Client-side rate limiting
const registerRateLimiter = new RateLimiter(3, 60000); // 3 attempts per minute

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: 'None', color: 'gray' });

  const validateForm = () => {
    const errors = {};

    // Validate email
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      errors.email = emailValidation.error;
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      errors.password = passwordValidation.error;
    }

    // Confirm password match
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordStrength(getPasswordStrength(value));
    setFieldErrors(prev => ({ ...prev, password: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    // Client-side validation
    if (!validateForm()) {
      return;
    }

    // Rate limiting
    if (!registerRateLimiter.canAttempt()) {
      const remainingTime = Math.ceil(registerRateLimiter.getRemainingTime() / 1000);
      setError(`Too many registration attempts. Please wait ${remainingTime} seconds.`);
      return;
    }

    setIsLoading(true);

    try {
      registerRateLimiter.recordAttempt();

      // Call /auth/register endpoint with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch('http://127.0.0.1:8081/auth/register', {
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
        const data = await res.json().catch(() => ({ error: 'Registration failed' }));
        throw new Error(data.error || 'Registration failed');
      }

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('user_email', validateEmail(email).value); // Store for session reconfirmation

        // Reset rate limiter on successful registration
        registerRateLimiter.reset();

        navigate('/');
      } else {
        throw new Error('Registration successful but no token received');
      }
    } catch (err) {
      console.error('Registration error:', err);
      if (err.name === 'AbortError') {
        setError('Request timed out. Please check your connection and try again.');
      } else {
        setError(err.message || 'Failed to register. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e0e0e0] flex items-center justify-center p-6">
      <div className="neumorphic-card p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-secondary">Join us to get started</p>
        </div>

        {error && (
          <div className="neumorphic-inset bg-red-50 text-red-500 p-4 mb-6 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={e => handlePasswordChange(e.target.value)}
                onBlur={() => {
                  const validation = validatePassword(password);
                  if (!validation.valid) {
                    setFieldErrors(prev => ({ ...prev, password: validation.error }));
                  }
                }}
                className="w-full bg-transparent outline-none text-primary placeholder-secondary"
                placeholder="••••••••"
                required
                autoComplete="new-password"
                maxLength={128}
              />
            </div>
            {fieldErrors.password && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.password}</p>
            )}
            {password && !fieldErrors.password && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-secondary">Password Strength:</span>
                  <span className={`font-medium text-${passwordStrength.color}-600`}>
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="w-full h-1 bg-gray-300 rounded">
                  <div
                    className={`h-full bg-${passwordStrength.color}-500 rounded transition-all`}
                    style={{ width: `${(passwordStrength.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            )}
            <p className="text-xs text-secondary mt-2">
              Must be 12+ characters with uppercase, lowercase, number, and special character
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Confirm Password
            </label>
            <div className={`neumorphic-inset p-3 ${fieldErrors.confirmPassword ? 'border-2 border-red-400' : ''}`}>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                  setFieldErrors(prev => ({ ...prev, confirmPassword: null }));
                }}
                className="w-full bg-transparent outline-none text-primary placeholder-secondary"
                placeholder="••••••••"
                required
                autoComplete="new-password"
                maxLength={128}
              />
            </div>
            {fieldErrors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="neumorphic-button w-full py-3 text-primary font-medium transition-all duration-200"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="text-sm text-secondary text-center mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
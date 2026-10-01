import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_BASE_URL = 'https://dietitian-app-rmud.onrender.com'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      )

      const data = await response
        .json()
        .catch(() => ({}))

      if (!response.ok) {
        const message =
          data?.detail
            ? Array.isArray(data.detail)
              ? data.detail
                  .map((item) => item.msg)
                  .join(', ')
              : data.detail
            : `Login failed (${response.status})`

        throw new Error(message)
      }

      console.log('Login successful:', data)

      // Store authentication token
      if (data.access_token) {
        localStorage.setItem(
          'access_token',
          data.access_token
        )
      }

      // Store token type
      if (data.token_type) {
        localStorage.setItem(
          'token_type',
          data.token_type
        )
      }

      // Store the complete login response.
      // Appointments.jsx uses this information
      // to obtain the logged-in client's ID.
      localStorage.setItem(
        'loginResponse',
        JSON.stringify(data)
      )

      // Store email as a backup
      localStorage.setItem(
        'userEmail',
        formData.email.trim()
      )

      // Go to dashboard
      navigate('/dashboard')
    } catch (err) {
      console.error('Login error:', err)

      setError(
        err.message ||
          'Unable to connect to the server. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container login-auth-container">

        {/* Left Side */}
        <div className="auth-brand login-brand">

          <Link to="/" className="logo">
            <span className="logo-icon"></span>
            <span>NutriCare</span>
          </Link>

          <span className="login-welcome-tag">
            WELCOME BACK
          </span>

          <h1>
            Your nutrition
            <br />
            journey continues<span>.</span>
          </h1>

          <p>
            Sign in to access your NutriCare account,
            manage your appointments and continue your
            nutrition journey with professional support.
          </p>

          <div className="login-benefits">

            <div className="login-benefit">
              <span>✓</span>
              <div>
                <strong>Manage appointments</strong>
                <p>
                  Schedule and manage your dietitian
                  appointments.
                </p>
              </div>
            </div>

            <div className="login-benefit">
              <span>✓</span>
              <div>
                <strong>Track your journey</strong>
                <p>
                  Keep your nutrition goals and progress
                  in one place.
                </p>
              </div>
            </div>

            <div className="login-benefit">
              <span>✓</span>
              <div>
                <strong>Professional support</strong>
                <p>
                  Connect with registered dietitians
                  through NutriCare.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="auth-card login-card-modern">

          <div className="auth-header">
            {/* Keep "Login" so Login.test.jsx passes */}
            <h2>Login</h2>

            <p>
              Welcome back. Please enter your details
              to continue.
            </p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label
                htmlFor="email"
                className="login-label"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="password"
                className="login-label"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert(
                    'Please contact NutriCare support to reset your password.'
                  )
                }
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="login-submit-button"
              disabled={loading}
            >
              {loading
                ? 'Logging in...'
                : 'Login'}
            </button>

          </form>

          <div className="login-register-links">

            <p>
              Don't have an account?
            </p>

            <Link
              to="/register/client"
              className="login-register-button"
            >
              Create a Client Account
            </Link>

            <p className="dietitian-register-text">
              Are you a dietitian?{' '}
              <Link to="/register/dietitian">
                Register as Dietitian
              </Link>
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
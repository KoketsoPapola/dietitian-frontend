import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Login API will be connected later.
    console.log('Login form submitted')
  }

  const handleForgotPassword = () => {
    console.log('Forgot password selected')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-brand">

          <Link to="/" className="logo">
            <span className="logo-icon"></span>
            <span>NutriCare</span>
          </Link>

          <h1>Welcome Back</h1>

          <p>
            Log in to continue your personalised nutrition journey.
            Manage your nutrition, meal plans and progress in one place.
          </p>

        </div>

        {/* LOGIN CARD */}
        <div className="auth-card">

          <div className="auth-header">

            <h2>Login</h2>

            <p>
              Enter your details to access your account.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="login_email">
                Email Address
              </label>

              <input
                type="email"
                id="login_email"
                placeholder="Enter your email"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label htmlFor="login_password">
                Password
              </label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? 'text' : 'password'}
                  id="login_password"
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>

              </div>

            </div>

            {/* LOGIN OPTIONS */}
            <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                  id="remember_me"
                />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="primary-btn auth-submit"
            >
              Login
            </button>

          </form>

          {/* REGISTER DIVIDER */}
          <div className="auth-divider">
            <span>
              Don't have an account?
            </span>
          </div>

          {/* REGISTER */}
          <button
            type="button"
            className="secondary-btn auth-submit"
            onClick={() => navigate('/register')}
          >
            Create an Account
          </button>

          {/* HOME */}
          <Link
            to="/"
            className="back-home"
          >
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Login
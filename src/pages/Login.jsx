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

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        const message =
          data?.detail
            ? Array.isArray(data.detail)
              ? data.detail.map((item) => item.msg).join(', ')
              : data.detail
            : `Login failed (${response.status})`

        throw new Error(message)
      }

      console.log('Login successful:', data)

      // Store the token returned by the backend.
      if (data.access_token) {
        localStorage.setItem(
          'access_token',
          data.access_token
        )
      }

      if (data.token_type) {
        localStorage.setItem(
          'token_type',
          data.token_type
        )
      }

      // Keep the complete login response available.
      localStorage.setItem(
        'loginResponse',
        JSON.stringify(data)
      )

      // Store the email for use by the frontend.
      localStorage.setItem(
        'userEmail',
        formData.email.trim()
      )

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
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <p>
          Sign in to your account.
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p>
          Don't have an account?{' '}
          <Link to="/client-register">
            Register as Client
          </Link>
        </p>

        <p>
          Are you a dietitian?{' '}
          <Link to="/dietitian-register">
            Register as Dietitian
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
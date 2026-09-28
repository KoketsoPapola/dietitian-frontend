import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_BASE_URL = 'https://dietitian-app-rmud.onrender.com'

function ClientRegister() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    dietitian_id: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [registeredUser, setRegisteredUser] = useState(null)

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
        `${API_BASE_URL}/api/v1/auth/register/client`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: formData.full_name.trim(),
            email: formData.email.trim(),
            dietitian_id: formData.dietitian_id.trim(),
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
            : `Registration failed (${response.status})`

        throw new Error(message)
      }

      setRegisteredUser(data.user || null)
      setRegistrationSuccess(true)
    } catch (err) {
      console.error('Client registration error:', err)
      setError(
        err.message ||
          'Unable to connect to the server. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (registrationSuccess) {
    return (
      <div className="register-container">
        <div className="register-card">
          <h2>Registration Successful</h2>

          <p>
            Your client account has been registered successfully.
          </p>

          {registeredUser && (
            <div className="success-details">
              <p>
                <strong>Name:</strong> {registeredUser.full_name}
              </p>

              <p>
                <strong>Email:</strong> {registeredUser.email}
              </p>

              <p>
                <strong>Client ID:</strong> {registeredUser.id}
              </p>
            </div>
          )}

          <button onClick={() => navigate('/login')}>
            Continue to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Client Registration</h2>

        <p>Create your client account.</p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="full_name">
              Full Name
            </label>

            <input
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

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
            <label htmlFor="dietitian_id">
              Dietitian ID
            </label>

            <input
              id="dietitian_id"
              name="dietitian_id"
              type="text"
              value={formData.dietitian_id}
              onChange={handleChange}
              placeholder="Enter your dietitian ID"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p>
          Already have an account?{' '}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ClientRegister
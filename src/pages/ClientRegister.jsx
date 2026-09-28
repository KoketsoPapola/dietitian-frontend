import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ClientRegister() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Client registration API will be connected later.
    console.log('Client registration submitted')

    setRegistrationSuccess(true)
  }

  if (registrationSuccess) {
    return (
      <div className="auth-page">
        <div className="auth-container">

          <div className="auth-brand">

            <Link to="/" className="logo">
              <span className="logo-icon"></span>
              <span>NutriCare</span>
            </Link>

            <h1>Welcome to NutriCare</h1>

            <p>
              Your nutrition journey starts here. Complete your
              registration and connect with professional dietary support.
            </p>

          </div>

          <div className="auth-card success-card">

            <div className="success-icon">
              ✓
            </div>

            <div className="auth-header">
              <h2>Registration Successful</h2>

              <p>
                Your client account has been created successfully.
              </p>
            </div>

            <button
              type="button"
              className="primary-btn auth-submit"
              onClick={() => navigate('/login')}
            >
              Continue to Login
            </button>

            <button
              type="button"
              className="back-home"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>

          </div>
        </div>
      </div>
    )
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

          <h1>Client Registration</h1>

          <p>
            Create your client account and start your personalised
            nutrition journey with professional dietary support.
          </p>

        </div>

        {/* FORM CARD */}
        <div className="auth-card">

          <div className="auth-header">
            <h2>Create Client Account</h2>

            <p>
              Enter your details below to create your account.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="client_full_name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="client_full_name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="client_email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="client_email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            {/* DOB + GENDER */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="date_of_birth">
                  Date of Birth
                </label>

                <input
                  type="date"
                  id="date_of_birth"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">
                  Gender
                </label>

                <select
                  id="gender"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select gender
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

            </div>

            {/* HEIGHT */}
            <div className="form-group">
              <label htmlFor="height">
                Height (cm)
              </label>

              <input
                type="number"
                id="height"
                placeholder="Enter your height in centimetres"
                min="1"
                step="0.1"
              />
            </div>

            {/* DIETITIAN */}
            <div className="form-group">
              <label htmlFor="dietitian_id">
                Dietitian
              </label>

              <select
                id="dietitian_id"
                defaultValue=""
              >
                <option value="">
                  Select a dietitian (optional)
                </option>

                <option value="dietitian_001">
                  Available Dietitian 1
                </option>

                <option value="dietitian_002">
                  Available Dietitian 2
                </option>
              </select>
            </div>

            {/* LIFE STAGE */}
            <div className="form-group">
              <label htmlFor="life_stage_id">
                Life Stage
              </label>

              <select
                id="life_stage_id"
                defaultValue=""
              >
                <option value="">
                  Select your life stage (optional)
                </option>

                <option value="young_adult">
                  Young Adult
                </option>

                <option value="adult">
                  Adult
                </option>

                <option value="older_adult">
                  Older Adult
                </option>
              </select>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="primary-btn auth-submit"
            >
              Create Client Account
            </button>

          </form>

          <button
            type="button"
            onClick={() => navigate('/register')}
            className="back-home"
          >
            Back to Account Type
          </button>

        </div>
      </div>
    </div>
  )
}

export default ClientRegister
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function DietitianRegister() {
  const [showPassword, setShowPassword] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Dietitian registration API will be connected later.
    console.log('Dietitian registration submitted')

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

            <h1>Professional Registration</h1>

            <p>
              Thank you for registering as a dietitian.
              Your professional details will be reviewed before
              your account becomes active.
            </p>

          </div>

          <div className="auth-card success-card">

            <div className="success-icon">
              ✓
            </div>

            <div className="auth-header">

              <h2>Registration Submitted</h2>

              <p>
                Your dietitian registration has been submitted
                successfully and is pending approval.
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

          <h1>Dietitian Registration</h1>

          <p>
            Register as a dietitian and manage clients,
            nutrition plans, appointments and professional
            recommendations.
          </p>

        </div>

        {/* FORM CARD */}
        <div className="auth-card">

          <div className="auth-header">

            <h2>Create Dietitian Account</h2>

            <p>
              Enter your professional information below.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {/* FIRST + LAST NAME */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="first_name">
                  First Name
                </label>

                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter first name"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="last_name">
                  Last Name
                </label>

                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter last name"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="dietitian_email">
                Email Address
              </label>

              <input
                type="email"
                id="dietitian_email"
                placeholder="Enter professional email"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label htmlFor="dietitian_password">
                Password
              </label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? 'text' : 'password'}
                  id="dietitian_password"
                  placeholder="Create a password"
                  minLength="8"
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

            {/* REGISTRATION NUMBER */}
            <div className="form-group">

              <label htmlFor="registration_number">
                Registration Number
              </label>

              <input
                type="text"
                id="registration_number"
                placeholder="Enter professional registration number"
                required
              />

            </div>

            {/* SPECIALISATION */}
            <div className="form-group">

              <label htmlFor="specialisation">
                Specialisation
              </label>

              <input
                type="text"
                id="specialisation"
                placeholder="Enter specialisation (optional)"
              />

            </div>

            {/* BRANCH */}
            <div className="form-group">

              <label htmlFor="branch_id">
                Branch
              </label>

              <select
                id="branch_id"
                defaultValue=""
                required
              >

                <option value="" disabled>
                  Select a branch
                </option>

                <option value="BR001">
                  Main Branch
                </option>

                <option value="BR002">
                  Polokwane Branch
                </option>

                <option value="BR003">
                  Johannesburg Branch
                </option>

              </select>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="primary-btn auth-submit"
            >
              Submit Dietitian Registration
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

export default DietitianRegister
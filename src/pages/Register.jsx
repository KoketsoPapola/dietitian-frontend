import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-brand">

          <Link to="/" className="logo">
            <span className="logo-icon"></span>
            <span>NutriCare</span>
          </Link>

          <h1>Create Your Account</h1>

          <p>
            Join NutriCare and start managing your nutrition journey
            with the right tools and professional support.
          </p>

        </div>

        {/* ACCOUNT TYPE CARD */}
        <div className="auth-card">

          <div className="auth-header">
            <h2>Choose Account Type</h2>

            <p>
              Select the type of account you want to create.
            </p>
          </div>

          <div className="account-type-buttons">

            {/* CLIENT */}
            <button
              type="button"
              className="account-type-btn"
              onClick={() => navigate('/register/client')}
            >
              <strong>Client</strong>

              <span>
                Manage your nutrition journey, meal plans
                and progress.
              </span>
            </button>

            {/* DIETITIAN */}
            <button
              type="button"
              className="account-type-btn"
              onClick={() => navigate('/register/dietitian')}
            >
              <strong>Dietitian</strong>

              <span>
                Manage clients, meal plans, appointments
                and nutrition guidance.
              </span>
            </button>

          </div>

          <Link
            to="/login"
            className="back-home"
          >
            Back to Login
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Register
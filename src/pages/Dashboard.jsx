import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    const savedLogin = localStorage.getItem('loginResponse')
    const savedEmail = localStorage.getItem('userEmail')

    // If the user is not logged in, send them back to login
    if (!token) {
      navigate('/login')
      return
    }

    // Get the logged-in user's information
    if (savedLogin) {
      try {
        const data = JSON.parse(savedLogin)
        setUser(data.user || data)
      } catch {
        setUser({
          email: savedEmail || 'User',
        })
      }
    } else {
      setUser({
        email: savedEmail || 'User',
      })
    }
  }, [navigate])

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('token_type')
    localStorage.removeItem('loginResponse')
    localStorage.removeItem('userEmail')

    navigate('/login')
  }

  // Wait until user information is loaded
  if (!user) {
    return null
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div>
            <span className="section-tag">DASHBOARD</span>

            <h1>
              Welcome back<span>.</span>
            </h1>

            <p>
              Manage your nutrition journey from one place.
            </p>
          </div>

          <button
            type="button"
            className="dashboard-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* User Information */}
        <div className="dashboard-welcome-card">
          <div>
            <span className="dashboard-label">
              YOUR ACCOUNT
            </span>

            <h2>
              {user.full_name || user.name || 'NutriCare User'}
            </h2>

            <p>
              {user.email || 'No email available'}
            </p>
          </div>

          <div className="dashboard-status">
            <span>●</span>
            Active
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-grid">

          {/* Appointments */}
          <div className="dashboard-card">
            <span className="dashboard-card-icon">
              📅
            </span>

            <h3>Appointments</h3>

            <p>
              View and manage your upcoming appointments.
            </p>

            <button
              type="button"
              onClick={() => navigate('/appointments')}
            >
              View Appointments →
            </button>
          </div>

          {/* Meal Plans */}
          <div className="dashboard-card">
            <span className="dashboard-card-icon">
              🥗
            </span>

            <h3>Meal Plans</h3>

            <p>
              Access your personalised nutrition and meal plans.
            </p>

            <button type="button">
              View Meal Plans →
            </button>
          </div>

          {/* Progress */}
          <div className="dashboard-card">
            <span className="dashboard-card-icon">
              📈
            </span>

            <h3>Progress</h3>

            <p>
              Track your nutrition and health progress.
            </p>

            <button type="button">
              View Progress →
            </button>
          </div>

          {/* Recommendations */}
          <div className="dashboard-card">
            <span className="dashboard-card-icon">
              💡
            </span>

            <h3>Recommendations</h3>

            <p>
              Explore nutrition recommendations and guidance.
            </p>

            <button type="button">
              View Recommendations →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
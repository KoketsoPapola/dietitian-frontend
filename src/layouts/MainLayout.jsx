import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.substring(1)
      )

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [location])

  const handleSectionClick = (section) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`)
      return
    }

    const element = document.getElementById(section)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <Link
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="logo-icon"></span>
          <span>NutriCare</span>
        </Link>


        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/appointments">
            Appointments
          </Link>

          <button
            type="button"
            onClick={() => handleSectionClick('about')}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleSectionClick('services')}
          >
            Services
          </button>

          <button
            type="button"
            onClick={() => handleSectionClick('contact')}
          >
            Contact
          </button>

        </div>


        <div className="nav-buttons">

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
          >
            Get Started
          </Link>

        </div>

      </nav>


      {/* ================= PAGE CONTENT ================= */}

      <main>
        <Outlet />
      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">

            <div className="logo">
              <span className="logo-icon"></span>
              <span>NutriCare</span>
            </div>

            <p>
              Better nutrition for a healthier life.
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 NutriCare. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default MainLayout
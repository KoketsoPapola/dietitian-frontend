import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            Personalised nutrition made simple
          </div>

          <h1>
            Better nutrition.
            <span> Better living.</span>
          </h1>

          <p>
            NutriCare connects you with qualified dietitians,
            personalised meal plans and tools to help you
            understand and manage your nutrition journey.
          </p>

          <div className="hero-buttons">

            <Link
              to="/register"
              className="primary-btn"
            >
              Get Started
            </Link>

            <a
              href="#services"
              className="secondary-btn"
            >
              Explore Services
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <span className="trust-icon">✓</span>
              Qualified Dietitians
            </div>

            <div className="trust-item">
              <span className="trust-icon">✓</span>
              Personalised Plans
            </div>

            <div className="trust-item">
              <span className="trust-icon">✓</span>
              Progress Tracking
            </div>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">

          <div className="hero-card-main">

            <span className="hero-card-label">
              NUTRICARE
            </span>

            <h3>
              Your nutrition journey,
              <span> made simpler.</span>
            </h3>

            <p>
              Get professional support, personalised
              nutrition guidance and tools designed
              around your needs.
            </p>

            <div className="hero-card-lines">

              <div className="hero-line">
                <span></span>
                Personalised Nutrition
              </div>

              <div className="hero-line">
                <span></span>
                Professional Guidance
              </div>

              <div className="hero-line">
                <span></span>
                Easy Progress Tracking
              </div>

            </div>

          </div>


          <div className="hero-card-small">

            <div className="small-card-icon"></div>

            <div>
              <span>Professional Support</span>
              <strong>Qualified Dietitians</strong>
            </div>

          </div>


          <div className="hero-decoration hero-decoration-one"></div>
          <div className="hero-decoration hero-decoration-two"></div>

        </div>

      </section>


      {/* ================= WHY NUTRICARE ================= */}

      <section
        className="home-intro"
        id="why-nutricare"
      >

        <div className="section-heading">

          <span className="section-tag">
            WHY NUTRICARE
          </span>

          <h2>
            Everything you need for
            <span> a healthier journey.</span>
          </h2>

          <p>
            Nutrition can be easier when you have the right
            information, professional guidance and tools
            to keep you on track.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon feature-person"></div>

            <h3>
              Personalised Nutrition
            </h3>

            <p>
              Receive nutrition guidance that considers
              your individual needs, goals and lifestyle.
            </p>

          </div>


          <div className="feature-card featured">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon feature-guide"></div>

            <h3>
              Professional Guidance
            </h3>

            <p>
              Connect with qualified dietitians who can
              provide professional dietary support.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon feature-track"></div>

            <h3>
              Track Your Progress
            </h3>

            <p>
              Monitor your progress and stay focused
              on your nutrition and health goals.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-it-works">

        <div className="section-heading">

          <span className="section-tag">
            HOW IT WORKS
          </span>

          <h2>
            Your nutrition journey,
            <span> made simple.</span>
          </h2>

          <p>
            Get started with NutriCare in just a few simple steps.
          </p>

        </div>


        <div className="steps-container">

          <div className="step">

            <div className="step-number">
              1
            </div>

            <div>
              <h3>
                Create your account
              </h3>

              <p>
                Register as a client and provide your
                basic information.
              </p>
            </div>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              2
            </div>

            <div>
              <h3>
                Connect with a dietitian
              </h3>

              <p>
                Access professional dietary guidance
                based on your needs.
              </p>
            </div>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              3
            </div>

            <div>
              <h3>
                Follow your plan
              </h3>

              <p>
                Use your personalised meal plans and
                nutrition recommendations.
              </p>
            </div>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              4
            </div>

            <div>
              <h3>
                Track your progress
              </h3>

              <p>
                Monitor your journey and work towards
                your nutrition goals.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="home-services"
        id="services"
      >

        <div className="section-heading">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Support for your
            <span> nutrition needs.</span>
          </h2>

          <p>
            NutriCare brings the essential tools for
            managing your nutrition journey together.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-icon service-consultation"></div>

            <span className="service-label">
              PROFESSIONAL SUPPORT
            </span>

            <h3>
              Dietitian Consultation
            </h3>

            <p>
              Connect with qualified dietitians for
              professional dietary advice and personalised
              support.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>


          <div className="service-card">

            <div className="service-icon service-meal"></div>

            <span className="service-label">
              PERSONALISED
            </span>

            <h3>
              Meal Plans
            </h3>

            <p>
              Access meal plans designed around your
              nutritional needs and personal goals.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>


          <div className="service-card">

            <div className="service-icon service-progress"></div>

            <span className="service-label">
              YOUR JOURNEY
            </span>

            <h3>
              Progress Tracking
            </h3>

            <p>
              Record your progress and monitor changes
              throughout your nutrition journey.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>


          <div className="service-card">

            <div className="service-icon service-recommendation"></div>

            <span className="service-label">
              SMART SUPPORT
            </span>

            <h3>
              Nutrition Recommendations
            </h3>

            <p>
              Get useful recommendations to support
              healthier food choices.
            </p>

            <span className="service-arrow">
              →
            </span>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="home-about"
        id="about"
      >

        <div className="about-text">

          <span className="section-tag">
            ABOUT NUTRICARE
          </span>

          <h2>
            Making nutrition
            <span> easier to manage.</span>
          </h2>

          <p>
            NutriCare is designed to bring clients and
            dietitians together through one simple platform.
          </p>

          <p>
            From personalised nutrition guidance and meal
            planning to appointments and progress tracking,
            NutriCare helps make the nutrition journey more
            organised and accessible.
          </p>


          <div className="about-checks">

            <div>
              <span>✓</span>
              Personalised support
            </div>

            <div>
              <span>✓</span>
              Professional guidance
            </div>

            <div>
              <span>✓</span>
              Easy progress tracking
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="home-contact"
        id="contact"
      >

        <div className="contact-container">

          <div className="contact-info">

            <span className="section-tag">
              CONTACT US
            </span>

            <h2>
              We're here to support
              <span> your journey.</span>
            </h2>

            <p>
              Have a question about NutriCare, appointments
              or nutrition support? Get in touch with us.
            </p>


            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-icon contact-email"></div>

                <div>
                  <span>Email</span>
                  <strong>support@nutricare.co.za</strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon contact-phone"></div>

                <div>
                  <span>Phone</span>
                  <strong>+27 10 000 0000</strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon contact-location"></div>

                <div>
                  <span>Support</span>
                  <strong>Monday - Friday</strong>
                </div>

              </div>

            </div>

          </div>


          <div className="contact-card">

            <h3>
              Send us a message
            </h3>

            <p>
              Fill in the form below and our team will
              get back to you.
            </p>


            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >

              <div className="contact-form-row">

                <div className="form-group">
                  <label htmlFor="contact_name">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="contact_name"
                    placeholder="Enter your name"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="contact_email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contact_email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>


              <div className="form-group">

                <label htmlFor="contact_message">
                  Message
                </label>

                <textarea
                  id="contact_message"
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>

              </div>


              <button
                type="submit"
                className="primary-btn contact-submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="home-cta">

        <div className="cta-content">

          <span className="section-tag">
            START YOUR JOURNEY
          </span>

          <h2>
            A healthier you starts
            <span> with better nutrition.</span>
          </h2>

          <p>
            Take control of your nutrition journey with
            NutriCare and the support you need to make
            healthier choices.
          </p>

          <div className="cta-buttons">

            <Link
              to="/register"
              className="primary-btn"
            >
              Create Your Account
            </Link>

            <Link
              to="/appointments"
              className="secondary-btn"
            >
              View Appointments
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home
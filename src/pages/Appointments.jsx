import { useEffect, useState } from 'react'
import API_BASE_URL from '../services/api'

function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    client_id: '',
    dietitian_id: '',
    appointment_date: '',
    appointment_time: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(
        `${API_BASE_URL}/api/v1/appointments`
      )

      if (!response.ok) {
        throw new Error('Failed to load appointments')
      }

      const data = await response.json()

      setAppointments(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setSubmitting(true)
      setError('')
      setSuccess('')

      const response = await fetch(
        `${API_BASE_URL}/api/v1/appointments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)

        throw new Error(
          errorData?.detail || 'Failed to create appointment'
        )
      }

      setSuccess('Appointment created successfully.')

      setFormData({
        client_id: '',
        dietitian_id: '',
        appointment_date: '',
        appointment_time: '',
      })

      await fetchAppointments()
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-container">

      <section className="page-header">
        <h1>Appointments</h1>

        <p>
          Schedule and manage appointments between clients and dietitians.
        </p>
      </section>

      <section className="appointment-form-section">

        <h2>Book an Appointment</h2>

        <form onSubmit={handleSubmit} className="appointment-form">

          {/* CLIENT ID */}
          <div className="form-group">
            <label htmlFor="client_id">
              Client ID
            </label>

            <input
              id="client_id"
              name="client_id"
              type="text"
              value={formData.client_id}
              onChange={handleChange}
              placeholder="Enter client ID"
              required
            />
          </div>

          {/* DIETITIAN ID */}
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
              placeholder="Enter dietitian ID"
              required
            />
          </div>

          {/* DATE */}
          <div className="form-group">
            <label htmlFor="appointment_date">
              Date
            </label>

            <input
              id="appointment_date"
              name="appointment_date"
              type="date"
              value={formData.appointment_date}
              onChange={handleChange}
              required
            />
          </div>

          {/* TIME */}
          <div className="form-group">
            <label htmlFor="appointment_time">
              Time
            </label>

            <input
              id="appointment_time"
              name="appointment_time"
              type="time"
              value={formData.appointment_time}
              onChange={handleChange}
              required
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Booking...' : 'Book Appointment'}
          </button>

        </form>

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

      </section>

      <section className="appointments-list">

        <h2>Appointments</h2>

        {loading ? (
          <p>Loading appointments...</p>
        ) : appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <div className="appointment-cards">

            {appointments.map((appointment, index) => (
              <div
                className="appointment-card"
                key={appointment.id || index}
              >

                <h3>
                  Appointment {appointment.id || index + 1}
                </h3>

                <p>
                  <strong>Client:</strong>{' '}
                  {appointment.client_id || 'N/A'}
                </p>

                <p>
                  <strong>Dietitian:</strong>{' '}
                  {appointment.dietitian_id || 'N/A'}
                </p>

                <p>
                  <strong>Date:</strong>{' '}
                  {appointment.appointment_date || 'N/A'}
                </p>

                <p>
                  <strong>Time:</strong>{' '}
                  {appointment.appointment_time || 'N/A'}
                </p>

              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  )
}
export default Appointments


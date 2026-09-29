import { useEffect, useState } from 'react'
import API_BASE_URL from '../services/api'

function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    client_id: '',
    dietitian_id: '',
    appointment_date: '',
  })

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(
        `${API_BASE_URL}/api/v1/appointments`
      )

      const data = await response.json().catch(() => [])

      if (!response.ok) {
        throw new Error(
          data?.detail || 'Failed to load appointments'
        )
      }

      setAppointments(
        Array.isArray(data) ? data : []
      )
    } catch (err) {
      console.error('Fetch appointments error:', err)

      setError(
        err.message ||
          'Unable to load appointments.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

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
    setSuccess('')
    setSubmitting(true)

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/appointments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: formData.client_id.trim(),
            dietitian_id: formData.dietitian_id.trim(),
            appointment_date:
              formData.appointment_date,
          }),
        }
      )

      const data = await response
        .json()
        .catch(() => ({}))

      if (!response.ok) {
        const message =
          data?.detail
            ? Array.isArray(data.detail)
              ? data.detail
                  .map((item) => item.msg)
                  .join(', ')
              : data.detail
            : `Failed to create appointment (${response.status})`

        throw new Error(message)
      }

      console.log(
        'Appointment created successfully:',
        data
      )

      setSuccess(
        'Appointment booked successfully.'
      )

      setFormData({
        client_id: '',
        dietitian_id: '',
        appointment_date: '',
      })

      await fetchAppointments()
    } catch (err) {
      console.error(
        'Create appointment error:',
        err
      )

      setError(
        err.message ||
          'Unable to book appointment.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-container">

      <section className="page-header">
        <span className="section-tag">
          NUTRICARE
        </span>

        <h1>Appointments</h1>

        <p>
          Schedule and manage appointments between
          clients and dietitians.
        </p>
      </section>

      <section className="appointment-form-section">

        <h2>Book an Appointment</h2>

        <p>
          Enter the client and dietitian details
          below to schedule an appointment.
        </p>

        <form
          onSubmit={handleSubmit}
          className="appointment-form"
        >

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
              placeholder="e.g. cli_12345678"
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
              placeholder="e.g. diet_12345678"
              required
            />
          </div>

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

          <button
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? 'Booking...'
              : 'Book Appointment'}
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

            {appointments.map(
              (appointment, index) => (
                <div
                  className="appointment-card"
                  key={
                    appointment.appointment_id ||
                    index
                  }
                >

                  <h3>
                    Appointment{' '}
                    {appointment.appointment_id ||
                      index + 1}
                  </h3>

                  <p>
                    <strong>Client:</strong>{' '}
                    {appointment.client_id ||
                      'N/A'}
                  </p>

                  <p>
                    <strong>Dietitian:</strong>{' '}
                    {appointment.dietitian_id ||
                      'N/A'}
                  </p>

                  <p>
                    <strong>Date:</strong>{' '}
                    {appointment.appointment_date ||
                      'N/A'}
                  </p>

                  <p>
                    <strong>Status:</strong>{' '}
                    {appointment.status ||
                      'N/A'}
                  </p>

                </div>
              )
            )}

          </div>
        )}

      </section>

    </div>
  )
}

export default Appointments
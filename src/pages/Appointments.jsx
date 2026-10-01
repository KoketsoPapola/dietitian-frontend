import { useEffect, useState } from 'react'
import API_BASE_URL from '../services/api'

function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [dietitians, setDietitians] = useState([])

  const [loading, setLoading] = useState(true)
  const [loadingDietitians, setLoadingDietitians] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    dietitian_id: '',
    appointment_date: '',
  })

  const getClientId = () => {
    try {
      const storedUser =
        localStorage.getItem('user') ||
        localStorage.getItem('currentUser') ||
        localStorage.getItem('client')

      if (!storedUser) return ''

      const user = JSON.parse(storedUser)

      return (
        user.client_id ||
        user.id ||
        user.user_id ||
        ''
      )
    } catch (err) {
      console.error('Unable to read logged-in user:', err)
      return ''
    }
  }

  const getErrorMessage = (data, fallback) => {
    if (data?.detail) {
      if (Array.isArray(data.detail)) {
        return data.detail
          .map((item) => item.msg)
          .join(', ')
      }

      return data.detail
    }

    return fallback
  }

  // Load appointments from the backend
  const fetchAppointments = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(
        `${API_BASE_URL}/appointments`
      )

      const data = await response.json().catch(() => [])

      if (!response.ok) {
        throw new Error(
          getErrorMessage(
            data,
            `Failed to load appointments (${response.status})`
          )
        )
      }

      const allAppointments = Array.isArray(data)
        ? data
        : Array.isArray(data.appointments)
          ? data.appointments
          : []

      const clientId = getClientId()

      if (clientId) {
        const myAppointments = allAppointments.filter(
          (appointment) =>
            String(appointment.client_id) ===
            String(clientId)
        )

        setAppointments(myAppointments)
      } else {
        setAppointments([])
      }
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

  // TEMPORARY:
  // The backend currently does not provide GET /dietitians.
  // We keep this function ready for when the endpoint becomes available.
  const fetchDietitians = async () => {
    try {
      setLoadingDietitians(true)

      // Temporary test dietitian.
      // This keeps the dropdown functional while the
      // real dietitian endpoint is being completed.
      setDietitians([
        {
          dietitian_id: 'diet_temp_001',
          first_name: 'Thabo',
          last_name: 'Mokoena',
          specialisation: '',
        },
      ])
    } catch (err) {
      console.error(
        'Fetch dietitians error:',
        err
      )

      setDietitians([])

      setError(
        'Unable to load dietitians.'
      )
    } finally {
      setLoadingDietitians(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
    fetchDietitians()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setError('')
    setSuccess('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setSuccess('')

    const clientId = getClientId()

    if (!clientId) {
      setError(
        'Your client information could not be found. Please log in again.'
      )
      return
    }

    if (!formData.dietitian_id) {
      setError(
        'Please select a dietitian.'
      )
      return
    }

    if (formData.dietitian_id === 'diet_temp_001') {
      setError(
        'This is a temporary dietitian option. Please use a real dietitian once they are available.'
      )
      return
    }

    if (!formData.appointment_date) {
      setError(
        'Please select an appointment date.'
      )
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(
        `${API_BASE_URL}/appointments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: clientId,
            dietitian_id:
              formData.dietitian_id,
            appointment_date:
              formData.appointment_date,
            notes:
              'Initial nutrition consultation',
          }),
        }
      )

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(
          getErrorMessage(
            data,
            `Failed to book appointment (${response.status})`
          )
        )
      }

      console.log(
        'Appointment created successfully:',
        data
      )

      setSuccess(
        'Appointment booked successfully!'
      )

      setFormData({
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
          Schedule and manage appointments with
          qualified dietitians.
        </p>
      </section>

      <section className="appointment-form-section">
        <h2>Book an Appointment</h2>

        <p>
          Select a dietitian and choose your
          preferred appointment date.
        </p>

        <form
          onSubmit={handleSubmit}
          className="appointment-form"
        >
          <div className="form-group">
            <label htmlFor="dietitian_id">
              Dietitian
            </label>

            <select
              id="dietitian_id"
              name="dietitian_id"
              value={formData.dietitian_id}
              onChange={handleChange}
              required
              disabled={
                submitting ||
                loadingDietitians
              }
            >
              <option value="">
                {loadingDietitians
                  ? 'Loading dietitians...'
                  : 'Select a dietitian'}
              </option>

              {dietitians.length > 0 ? (
                dietitians.map((dietitian) => {
                  const dietitianId =
                    dietitian.dietitian_id ||
                    dietitian.id

                  const firstName =
                    dietitian.first_name ||
                    dietitian.name ||
                    'Dietitian'

                  const lastName =
                    dietitian.last_name || ''

                  const specialisation =
                    dietitian.specialisation

                  return (
                    <option
                      key={dietitianId}
                      value={dietitianId}
                    >
                      {firstName} {lastName}
                      {specialisation
                        ? ` - ${specialisation}`
                        : ''}
                    </option>
                  )
                })
              ) : (
                <option value="no_dietitian">
                  No dietitians available
                </option>
              )}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="appointment_date">
              Appointment Date
            </label>

            <input
              id="appointment_date"
              name="appointment_date"
              type="date"
              value={formData.appointment_date}
              onChange={handleChange}
              min={
                new Date()
                  .toISOString()
                  .split('T')[0]
              }
              required
              disabled={submitting}
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
        <h2>My Appointments</h2>

        {loading ? (
          <p>
            Loading appointments...
          </p>
        ) : appointments.length === 0 ? (
          <p>
            You have no appointments yet.
          </p>
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

                  {appointment.notes && (
                    <p>
                      <strong>Notes:</strong>{' '}
                      {appointment.notes}
                    </p>
                  )}
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
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Login from './Login'

describe('Login page', () => {
  it('renders the login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: 'Login' })
    ).toBeInTheDocument()

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument()

    expect(
      screen.getByLabelText(/password/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Login' })
    ).toBeInTheDocument()
  })
})
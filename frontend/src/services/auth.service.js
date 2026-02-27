// frontend/src/services/auth.service.js
const API_URL = 'http://localhost:3000'

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  if (!response.ok) throw new Error('Login falhou')
  return response.json()
}

export async function register(name, email, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.error || 'Erro ao cadastrar')
  }
  return response.json()
}
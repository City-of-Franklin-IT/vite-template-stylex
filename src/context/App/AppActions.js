import { API_URL as baseUrl } from '../../config'

const authHeaders = (token) => {
  return ({
      'Authorization': `Bearer ${ token }`
  })
}

// Login user
// POST /path/to/api/route
export const loginUser = async (formData) => {
  const res = await fetch(`${ baseUrl }/ldap/ldap`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...formData })
  })

  return await res.json()
}

// Get user
// GET /path/to/api/route
export const getUser = async (token) => {
  const res = await fetch(`${ baseUrl }/ldap/ldap`, {
    headers: authHeaders(token)
  })

  return await res.json()
}
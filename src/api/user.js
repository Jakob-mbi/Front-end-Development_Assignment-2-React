/**
 * Get a existing user by its username
 * @param {string} username Username of user your trying to fetch
 * @returns Array containing potential error and a user object
 */
export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}?username=${username}`)
    
    if (!response.ok) {
      return Promise.Reject("Could not fetch user")
    }

    const data = await response.json()

    return [null, data[0]]

  } catch (error) {
    return [error, {}]
  }
}

/**
 * Create a new user in the database
 * @param {string} username Desired username for new user
 * @returns A user object
 */
export const registerUser = async (username) => {
  try {
    const headers = {
      'X-API-Key': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
    }

    const body = JSON.stringify({ 
      username, 
      translations: []
    })

    const response = await fetch(process.env.REACT_APP_API_URL, { method: 'POST', headers, body })
    
    if (!response.ok) {
      return Promise.reject("Could not register user")
    }

    const data = await response.json()

    return [null, data]
      
  } catch (error) {
    return [error, {}]
  }
}

/**
 * Update a existing user in the database
 * @param {string} userId A user ID from a fetched user object
 * @param {object} body A key/value object with the information you want changed
 * @returns A user object
 */
export const updateUser = async (userId, body) => {
  try {
      const headers = {
        'X-API-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/${userId}`, {
        method: 'PATCH', 
        headers, 
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        return Promise.reject("Could not update user object")
      }

      const data = await response.json()
      
      return [null, data]

  } catch (error) {
    return [error, data]
  }
}
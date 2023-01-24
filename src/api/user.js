export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}?username=${username}`)
    
    if (!response.ok) {
      throw Error("Failed to fetch user")
    }

    const data = await response.json()

    return data[0]

  } catch (error) {
    console.log(error)
  }
}

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
      throw Error("Failed to register user")
    }

    const data = await response.json()

    return data
      
  } catch (error) {
      console.log(error)
  }
}

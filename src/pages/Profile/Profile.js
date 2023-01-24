import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { fetchUser } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKey"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import { storageDelete } from "../../shared/storage"

function Profile() {
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  useEffect(() => {
    
    console.log(user)

    const reFetchUser = async () => {
      const userObject = await fetchUser(user.username)
      setUser(userObject)
    } 

    reFetchUser()
    // eslint-disable-next-line
  }, [])

  const logout = () => {
    storageDelete(STORAGE_KEY_USER)
    setUser(null)
    navigate("/")
  }

  const clearTranslations = async () => {
    try {
      const headers = {
        'X-API-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      }

      const body = JSON.stringify({
        translations: []
      })

      const response = await fetch(`${process.env.REACT_APP_API_URL}/${user.id}`, {
        method: 'PATCH', 
        headers, 
        body 
      })

      const data = await response.json()
      console.log(data)

      setUser(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="h-screen pt-20 bg-gray">
      <div className="h-4/5 flex flex-col items-center bg-yellow px-40 py-12">
      <div className="flex items-center">
        <div className="relative w-44">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M30,-24.3C43.8,-16.1,63.5,-8.1,65.9,2.4C68.4,13,53.6,25.9,39.8,36.7C25.9,47.6,13,56.3,2.2,54.1C-8.6,51.9,-17.2,38.9,-33.5,28C-49.8,17.2,-73.8,8.6,-79.7,-6C-85.7,-20.5,-73.7,-41.1,-57.4,-49.3C-41.1,-57.5,-20.5,-53.3,-6.2,-47C8.1,-40.8,16.1,-32.5,30,-24.3Z" transform="translate(100 100)" />
          </svg>
          <img 
            src="/images/Logo-Hello.png" 
            alt="A happy robot" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40" />
        </div>
        <div>
          <h1 className="text-4xl text-white heading-font">Hi {user.username}</h1>
          <h2 className="text-2xl text-white">Here are your most recent translations</h2>
        </div>
      </div>
      {user.translations.length ? (
        <ul className="list-disc w-1/2 px-8 py-4 rounded-lg -translate-y-2 bg-yellow-dark">
          {user.translations.map((translation, index) => (
            <li key={index}>{translation}</li>
          ))}
        </ul>
      ) : (
        <p className="my-auto">There is nothing here... Try <Link to="/translate" className="underline">translating</Link> something!</p>
      )}
      </div>
      <div className="h-1/5 flex justify-center items-center">
        <button onClick={clearTranslations} className="text-xl w-72 py-3 mr-1 rounded-lg border-4 border-red-500 bg-red-500 text-white">Clear translations</button>
        <button onClick={logout} className="text-xl w-72 py-3 ml-1 text-white bg-purple rounded-lg border-4" style={{ borderColor: "var(--PURPLE)" }}>Logout</button>
      </div>
    </div>
  )
}

export default withAuth(Profile)
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async ({ username }) => {
    const fetchedUser = await fetchUser(username)
    let userObject = fetchedUser[0]


    if (!userObject) { 
      const newUser = await registerUser(username)
      userObject = newUser
      console.log(newUser)
    }

    localStorage.setItem("user", JSON.stringify(userObject))
    navigate("/translate")
  }

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}?username=${username}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const registerUser = async (username) => {
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
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-screen pt-20 bg-gray">

      <header className="h-3/5 flex items-center bg-yellow px-40 py-12">
        <div className="relative w-64">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M32.5,-39.3C47.5,-33.8,68.8,-31.5,78.9,-20.8C89,-10.1,87.9,9,77.3,20.1C66.8,31.1,46.8,34,32.3,36.6C17.9,39.1,8.9,41.4,0.1,41.3C-8.8,41.2,-17.6,38.8,-30.4,35.7C-43.2,32.6,-59.8,28.7,-67.9,18.6C-75.9,8.5,-75.2,-7.9,-70.7,-23.3C-66.1,-38.8,-57.7,-53.3,-45.3,-59.6C-32.9,-66,-16.4,-64.1,-3.8,-58.8C8.7,-53.5,17.5,-44.8,32.5,-39.3Z" transform="translate(100 100)" />
          </svg>
          <img 
            src="/images/logo.png" 
            alt="A happy robot" 
            className="absolute top-1/2 left-1/2 w-40" 
            style={{ transform: "translate(-50%, -50%)"}}/>
        </div>

        <div className="pl-4">
          <h1 className="text-5xl text-white pb-3">Lost in Translation</h1>
          <h2 className="text-3xl text-white">Get started</h2>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto py-4 px-4 border-4 bg-white rounded-full -translate-y-1/2" style={{ borderColor: "var(--PURPLE)"}}>
        <label htmlFor="username" className="w-full flex items-center text-2xl">
          <input {...register("username", { required: true })} placeholder="What's your name?" className="w-full p-2" />
          <button type="submit" className="bg-purple text-white p-2 rounded-full">Go!</button>
        </label>
      </form>

      {errors.username && <p className="text-center text-red-500 text-xl font-bold -translate-y-1/2">Please enter a username</p>}

    </div>
  )
}

export default Login
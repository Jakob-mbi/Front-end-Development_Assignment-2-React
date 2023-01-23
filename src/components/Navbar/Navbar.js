import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"

function Navbar() {
  const { user } = useUser()

  return (
    <nav className="fixed w-full flex justify-between items-center pt-6 pb-4 px-48 bg-yellow border-b-2" style={{ borderColor: "var(--YELLOW-DARK)"}}>
        <h1 className="heading-font text-4xl text-white">Lost in translation</h1>
        {user && (
          <Link to="/profile" className="relative">
            <span className="rounded-l pl-2 py-1 pr-8 text-sm bg-yellow-dark">{user.username}</span>
            <img src="/images/user.svg" alt="" className="absolute left-3/4 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white rounded-full" />
          </Link>
        )}
    </nav>
  )
}

export default Navbar
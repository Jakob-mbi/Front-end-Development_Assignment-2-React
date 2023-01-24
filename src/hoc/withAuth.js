import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

const withAuth = Component => props => {
    const { user } = useUser()

    return user !== null ? (
        <Component {...props} />
    ) : (
        <Navigate to="/" />
    )
}

export default withAuth
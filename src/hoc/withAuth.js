import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

/**
 * Add user authentication to a component by wrapping it with this HOC
 * @param {React.Component} Component Component that requires authentication
 * @returns Component or redirects to login
 */
const withAuth = Component => props => {
    const { user } = useUser()

    return user !== null ? (
        <Component {...props} />
    ) : (
        <Navigate to="/" />
    )
}

export default withAuth
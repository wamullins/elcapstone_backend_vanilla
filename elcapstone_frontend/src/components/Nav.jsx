import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import LoggedInContext from '../LoggedInContext'

export const Nav = () => {

    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)

    return (
        <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/climbs" >Routes</NavLink>
            <NavLink to="/features">Features</NavLink>
            { loggedInUser ? 
                <>
                    <NavLink to="/profile">{loggedInUser.name}</NavLink>
                    <NavLink to="/signout" className="toggle-login">Sign Out</NavLink>
                </> :
                <NavLink to="/signin" className="toggle-login">Sign In</NavLink>
            }


            {/* this will be used with the oauth things */}
            {/* { loggedInUser ? <NavLink to="/logout">Log Out</NavLink>:
            <NavLink to="/auth/google" className="login">LogIn&nbsp;</NavLink>} */}
        </div>
    )
}

// bunch of components that look at the url {param} and if it's "climb" the climb component will show waht it needs (same for features and home)
// 
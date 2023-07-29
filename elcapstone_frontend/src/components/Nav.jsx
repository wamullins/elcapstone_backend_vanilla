import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import LoggedInContext from '../LoggedInContext'
import SelectedObjectContext from '../SelectedObjectContext'

export const Nav = () => {

    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const { setSelectedObject }= useContext(SelectedObjectContext)



    return (
        <div className="nav-links">
            <NavLink to="/" onClick={()=>setSelectedObject(null)}>Home</NavLink>
            <NavLink to="/climbs" onClick={()=>setSelectedObject(null)}>Routes</NavLink>
            <NavLink to="/features" onClick={()=>setSelectedObject(null)}>Features</NavLink>
            { loggedInUser ? 
                <>
                    <NavLink to="/profile" onClick={()=>setSelectedObject(null)}>{loggedInUser.name}</NavLink>
                    <NavLink to="/signout" className="toggle-login" onClick={()=>setSelectedObject(null)}>Sign Out</NavLink>
                </> :
                <NavLink to="/signin" className="toggle-login" onClick={()=>setSelectedObject(null)}>Sign In</NavLink>
            }


            {/* this will be used with the oauth things */}
            {/* { loggedInUser ? <NavLink to="/logout">Log Out</NavLink>:
            <NavLink to="/auth/google" className="login">LogIn&nbsp;</NavLink>} */}
        </div>
    )
}

// bunch of components that look at the url {param} and if it's "climb" the climb component will show waht it needs (same for features and home)
// 
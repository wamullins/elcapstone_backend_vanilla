import { useContext } from "react"
import LoggedInContext from "../LoggedInContext"

export const Profile = () => {
    const { loggedInUser } = useContext(LoggedInContext)

    if (!loggedInUser) {
        return <>No user logged In</>
    }

    return <>Welcome {loggedInUser.name}</>
    
}
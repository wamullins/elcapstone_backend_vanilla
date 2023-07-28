import { useContext } from "react"
import LoggedInContext from "../LoggedInContext"
import { ProfileEdit } from "./ProfileEdit"
import { SLEdit } from "./SLEdit"

export const Profile = () => {
    const { loggedInUser } = useContext(LoggedInContext)

    // useEffect

    if (!loggedInUser) {

        return (
            <div className="profile-wrapper">
                <div className="profile-route-body">No user logged In</div>
            </div>
        )
    }

    return (
        <div className="profile-wrapper">
            <div className="profile-route-body">
                <div className="profile-header">
                    <div style={{display: "flex", flexDirection: "column"}}>   
                        <div style={{fontSize: "30px"}}>{loggedInUser.name}</div>
                        <div>{loggedInUser.email}</div>
                    </div>
                    <button style={{textDecoration: "none", backgroundColor: "#ACA9A9", border: "none", fontSize: "20px", alignSelf: "flex-start"}}>(edit)</button>
                </div>
            
            
                <div className="personal-best">Personal Best: {loggedInUser.gradePB}</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>

                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div><div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div><div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div><div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div><div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div><div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
                <div>Welcome {loggedInUser.name}!</div>
            </div>
        </div>
       
    )
    
}
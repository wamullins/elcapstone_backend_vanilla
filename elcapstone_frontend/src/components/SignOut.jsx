import { useContext, useEffect, useState } from "react"
import LoggedInContext from "../LoggedInContext"

export const SignOut = () => {

    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [ username, setUsername ] = useState(null)

    useEffect(() => {
        if (loggedInUser) {
            setUsername(loggedInUser.name)
        }
    }, [loggedInUser])

    useEffect(() => {
        if (username) {
            setLoggedInUser(null)
            console.log('signing out')
        }
    },[username])
   

    return (<>logged out {username}</>)   
         
    
   
}
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import LoggedInContext from '../LoggedInContext'
export const SignIn = () => {

    const default_input = {
        email: '',
        password: '',
    }


    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [loginState, setLoginState] = useState(default_input)
    const navigate = useNavigate();

    // useEffect(() => {
    //     const getLoggedInUser = async () => {
    //         const response = await axios.get('http://localhost:3001/users/64c1a7596257b2f5fe9a6392')
    //         const data = response.data
    //         console.log(data.name)
    //         setLoggedInUser(data)
    //     }
    //     getLoggedInUser()
    // },[])

    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]: e.target.value})
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        const findUser = async () => {
            const response = await axios.get(`http://localhost:3001/users?email=${loginState.email}`)
            if (!response.data[0]) {
                console.log("email not found")
                return
            }
            console.log("email found")
            console.log(response.data[0])
            if (response.data[0].password === loginState.password) {
                console.log(`logging in ${response.data[0].name}`)
                setLoggedInUser(response.data[0])
                setLoginState(default_input)
                navigate('/profile')
                return
            }
            console.log("incorrect password")
            
        }
        findUser()
    }

    if (!loggedInUser) {
        return (
                <form className='sign-in-route-body' onSubmit={handleLogin}>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='email' onChange={handleChange} value={loginState.email}/>
                
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' onChange={handleChange} value={loginState.password}/>
                    
                    <button type="submit">Login</button>

                    <div>Don't have an account yet?</div>
                    <button  onClick={() => navigate('/signup')}>Sign Up!</button>
                </form>
        )
    }

    return (
        <>Logged in as {loggedInUser.name}</>
    )

}
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import LoggedInContext from '../LoggedInContext'
export const SignIn = () => {

    const default_input = {
        username: '',
        password: '',
    }


    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [loginState, setLoginState] = useState(default_input)

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

    const handleLogin = async () => {
        const findUser = async () => {
            const response = await axios.get(`http://localhost:3001/users?email=${loginState.username}`)
            if (!response) {
                const response = await axios.get(`http://localhost:3001/users?name=${loginState.username}`)
            }
            const data = response.data
            console.log(data.name)
            setLoggedInUser(data)
        }
        findUser()
    }

    if (!loggedInUser) {
        return (
            <form className='login-route-body' onSubmit={handleLogin}>
                <label htmlFor='username'>Username:</label>
                <input id='username' type='text' onChange={handleChange} value={loginState.username}/>
            
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' onChange={handleChange} value={loginState.password}/>
                
                <button type="submit" onClick={() => navigate('/admin')}>Login</button>
            </form>
        )
    }

    return (
        <>Welcome {loggedInUser.name}</>
    )

}
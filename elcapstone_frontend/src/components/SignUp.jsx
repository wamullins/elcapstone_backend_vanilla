import { useState, useEffect } from 'react'
import axios from 'axios'

export const SignUp = () => {

    const default_input = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [signUpFormState, setSignUpFormState] = useState(default_input)
    const [signedUpState, setSignedUpState] = useState(false)
    const [userEmails, setUserEmails] = useState([])

    // get all existing user emails. This will be used in teh handle sign up function
    useEffect(() => {
        const getEmails = async () => {
            const response = await axios.get('http://localhost:3001/users/emails')
            const data = response.data
            setUserEmails(data)
        }
        getEmails()
    },[])

    const handleChange = (e) => {
        setSignUpFormState({...signUpFormState, [e.target.id]: e.target.value})
    }

    const handleSignUp = async (e) => {
        e.preventDefault()

        // check existing emails and if there is already an account using the email, return here - 
        const existingEmail = userEmails.filter(em => em.email === signUpFormState.email)
        if (existingEmail.length > 0) {
            console.log("email already in use")
            return
        }

        // confirm that both passwords match
        if (signUpFormState.password !== signUpFormState.confirmPassword) {
            console.log("passwords must match")
            return
        }
        
        await axios.post(`http://localhost:3001/users/`, {
                name: signUpFormState.name,
                email: signUpFormState.email,
                gradePB: '',
                password: signUpFormState.password,
            })
            setSignedUpState(true)
            console.log("signed up")
    }

    if (!signedUpState) {
        return (
                <form className='sign-up-route-body' onSubmit={handleSignUp}>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' onChange={handleChange} value={signUpFormState.name}/>

                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='email' onChange={handleChange} value={signUpFormState.email}/>
                
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' onChange={handleChange} value={signUpFormState.password}/>

                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input id='confirmPassword' type='password' onChange={handleChange} value={signUpFormState.confirmPassword}/>
                    
                    <button type="submit">Sign Up!</button>
                </form>
        )
    }

    return (
        <div className='sign-up-route-body'>
            <div>Successfully Signed Up!</div>
            <div>You may now sign in with your email and password!</div>
        </div>
    )

}
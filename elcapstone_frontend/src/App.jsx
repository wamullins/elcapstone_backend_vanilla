import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import LoggedInContext from './LoggedInContext'
import { Nav } from './components/Nav'
import { Explorer } from './components/Explorer'
import { Profile } from './components/Profile'
import { SignIn } from './components/SignIn'
import { SignOut } from './components/SignOut'

function App() {

    const [loggedInUser, setLoggedInUser] = useState(null)

    // useEffect(() => {
    //     const getLoggedInUser = async () => {
    //         const response = await axios.get('http://localhost:3001/users/64c1a7596257b2f5fe9a6392')
    //         const data = response.data
    //         console.log(data.name)
    //         setLoggedInUser(data)
    //     }
    //     getLoggedInUser()
    // },[])

    return (
        <LoggedInContext.Provider value={{loggedInUser, setLoggedInUser}}>
            <div className="app">
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Explorer />} />
                    <Route exact path='/climbs' element={<Explorer />} />
                    <Route exact path='/features' element={<Explorer />} />
                    <Route exact path='/profile' element={<Profile />}/>
                    <Route exact path='/signin' element={<SignIn/>}/>
                    <Route exact path='/signout' element={<SignOut/>}/>
                </Routes>
            </div>
        </LoggedInContext.Provider>
    )
}

export default App

import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import LoggedInContext from './LoggedInContext'
import SelectedObjectContext from './SelectedObjectContext'
import AxiosActionContext from './AxiosActionContext'
import { Nav } from './components/Nav'
import { Explorer } from './components/Explorer'
import { Profile } from './components/Profile'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp' 
import { SignOut } from './components/SignOut'

function App() {

    const [ loggedInUser, setLoggedInUser ] = useState(null)
    const [ selectedObject, setSelectedObject ] = useState(null)
    const [ axiosAction, setAxiosAction ] = useState(false)

    return (
        <LoggedInContext.Provider value={{loggedInUser, setLoggedInUser}}>
            <SelectedObjectContext.Provider value={{selectedObject, setSelectedObject}}>
                <AxiosActionContext.Provider value={{axiosAction, setAxiosAction}}>
                    <div className="app">
                        <Nav />
                        <Routes>
                            <Route exact path='/' element={<Explorer />} />
                            <Route exact path='/climbs' element={<Explorer />} />
                            <Route exact path='/features' element={<Explorer />} />
                            <Route exact path='/profile' element={<Profile />}/>
                            <Route exact path='/signin' element={<SignIn/>}/>
                            <Route exact path='/signup' element={<SignUp/>}/>
                            <Route exact path='/signout' element={<SignOut/>}/>
                        </Routes>
                    </div>
                </AxiosActionContext.Provider>
            </SelectedObjectContext.Provider>
        </LoggedInContext.Provider>
    )
}

export default App

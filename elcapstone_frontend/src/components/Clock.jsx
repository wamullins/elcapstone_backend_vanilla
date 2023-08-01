import { useContext } from 'react'
import CameraPositionContext from "../CameraPositionContext"

export const Clock = () => { 

    const  moveHereLookThere = {
        position: [-4.4, 0, 0.3],
        target: [-0.97, 0.74, -0.3],
    }

    const { setCameraPosition } = useContext(CameraPositionContext)

    return (
        <div className="clock-div">
            <button onClick={()=> setCameraPosition(moveHereLookThere)}>Move Camera</button>
        </div>
        
    )
    // this will eventualy ben user to control the spot light overhead to change teh time of day. for now it is being used for camera angle testing
}
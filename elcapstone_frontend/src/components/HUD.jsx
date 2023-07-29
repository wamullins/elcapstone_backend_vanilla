import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import SelectedObjectContext from "../SelectedObjectContext"
import { SendLogList } from "./SendLogList"

export const HUD = () => {
    let location = useLocation().pathname;

    const [ collection, setCollection ] = useState([])
    const { selectedObject, setSelectedObject } = useContext(SelectedObjectContext)

    useEffect(() => {
        if (location ==="/") {return}

        const getCollection = async () => {
            const response = await axios.get(`http://localhost:3001${location}`)
            const data = response.data
            setCollection(data)
        }

        getCollection()
    }, [location])

    if (location=== "/") {
        return (
            <div className="home-title">El Capitan</div>
        )
    }

    if (!selectedObject) {
        return (
            <div className="object-menu">
            <div className="object-menu-title">{location==="/features" ? "features" : "routes"}</div>
            <div className="object-list">
                { collection.length > 0 ? 
                    <>
                        {collection.map((object, idx) => (
                            <div onClick={() => setSelectedObject(object)} key={idx} className="object-list-item">{object.name}</div>
                        ))}
                    </>
                    : <> Loading objects </>
                }
            </div>
        </div>
        )
    }

    return (
        <>
            <div className="object-picture-list">
                {selectedObject.images.map((image, idx) => (
                    <img src={image} key={idx}/>
                ))}
            </div>
            <div className="object-div">
                <div className="object-title">{selectedObject.name}</div>
                { location === "/climbs" ? 
                    <>
                        <div className="route-info-div">
                            <div style={{width: "50%", padding:"1%", borderTop: "1px solid black", borderBottom:"1px solid black"}}>Grade: {selectedObject.grade} </div>
                            <div style={{padding: "1%"}}>{selectedObject.description}</div>
                        </div>
                        <div className="route-log-title">Send Logs:</div>
                        <SendLogList/>
                    </>
                    
                    :
                    <div className="feature-info-div">{selectedObject.description}</div>
                }
            </div>

        </>
    )
    
}
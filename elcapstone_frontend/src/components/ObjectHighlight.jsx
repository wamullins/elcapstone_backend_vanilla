import { useContext, useState, useEffect } from 'react'
import CollectionContext from '../CollectionContext'
import SelectedObjectContext from '../SelectedObjectContext'
import { Box, Line, Cylinder } from "@react-three/drei"
import { useLocation} from "react-router-dom"

export const ObjectHighlight = () => { 

    let location = useLocation().pathname;

    const [hovered, setHovered] = useState('');
    const [invisible, setInvisible] = useState('');
    const { collection } = useContext(CollectionContext)
    const { selectedObject, setSelectedObject } = useContext(SelectedObjectContext)

    // when the object state changes, prime that object to become invisible when hovered
    useEffect(() => {
        if (!selectedObject) {
            setInvisible('')
            return
        }
        setInvisible(selectedObject.name)
    },[selectedObject])

    if (!collection) {
        return <></>
    }

    if (location === "/features") {
        return (
            <> 
                {collection.map((item, idx) => (
                    <Cylinder key={idx} position={item.highlight.position} args={item.highlight.args} rotation={item.highlight.rotation} onClick={()=> setSelectedObject(item)} onPointerOver={() => setHovered(idx)} onPointerOut={() => setHovered('')} > 
                        <meshMatcapMaterial transparent color={hovered === idx ? "white": "#ffb547"} opacity={invisible=== item.name ? 0.01 : 0.5}/>
                    </Cylinder>  
                ))} 
                    {/* <Cylinder args= {[0.3, 0.4, 0.2]} position={[1.4, 0.2, 0.75]} rotation={[Math.PI / 2, 0, 0]}> 
                        <meshStandardMaterial color={"red"} transparent opacity={0.2}/>
                    </Cylinder>   */}
            </>
        )
    } 
    
    if (location === "/climbs") return (
        <> 
            {/* {collection.map((item, idx) => (
                <Box key={idx} position={item.camera.target} args={[0.1,0.1,0.1]} onClick={()=> setSelectedObject(item)}> 
                    <meshMatcapMaterial Material color={"green"}/>
                </Box>  
            ))}  */}

            {collection.map((item, idx) => (
                <Line key={idx} points={item.points} onClick={()=> setSelectedObject(item)} lineWidth={15} dashed={false} color={hovered === idx ? "white": "red"} transparent onPointerOver={() => setHovered(idx)} onPointerOut={() => setHovered('')} opacity={hovered === idx && invisible=== item.name ? 0.01 : 0.5} />  
            ))}

            
            {/* <Line points={[[0.99, 1.45, 0.88],[1, 1.22, 0.95],[0.84, 1.28, 1.02],[0.76, 0.8, 1.06],[0.7, 0.42, 1.12],[0.65, 0.02, 1.17],[0.68, -0.04, 1.16],[0.72, 0.06, 1.12],[0.82, 0.06, 1.06],[0.92, -0.1, 1.02],[0.75, -0.32, 1.11],[0.7, -0.72, 1.2],[0.78, -1.08, 1.28],[0.87, -1.1, 1.35],]} color="red" lineWidth={15} dashed={false} transparent opacity={0.5}/> */}


            {/* <Box position={[-0.1, 0.1, 0.85]} args={[.1,.1,.1]}>
                <meshMatcapMaterial color={"red"}/>
            </Box> */}

            {/* <Line position={[[0,0,0], [1,1,1]]} points={[0, 0, 0]} color="black" lineWidth={1} segments dashed={false} >
                <meshMatcapMaterial color={"red"}/>
            </Line> */}
            
        </>
    )
        

   
    
}
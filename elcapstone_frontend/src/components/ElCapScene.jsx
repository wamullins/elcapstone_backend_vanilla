import { Suspense, useRef, useContext, useEffect } from 'react'
import { CameraControls, Box } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CameraPositionContext from '../CameraPositionContext'

export const ElCapScene = () => {

    const gltf = useLoader(GLTFLoader, '/el_capitan/scene.gltf')
    const { cameraPosition } = useContext(CameraPositionContext)
    const cameraControlsRef = useRef()
    
    // whenever the cameraPositionContext is changed, this will adjust the camera accordingly
    useEffect(() => {
        console.log(...cameraPosition.position)
        cameraControlsRef.current?.setPosition(cameraPosition.position[0], cameraPosition.position[1], cameraPosition.position[2], true)
        cameraControlsRef.current?.setTarget(cameraPosition.target[0], cameraPosition.target[1], cameraPosition.target[2], true)
        
    }, [cameraPosition])



    return (
        <>
            {/* <Box position={[0,0,0]} args={[2,2,2]}>
                <meshMatcapMaterial Material color={"#565264"}/>
            </Box> */}
            <primitive object={gltf.scene} rotation={[ 0, -Math.PI/3, 0]}/>
            <CameraControls
                ref={cameraControlsRef}
                enabled= {true}
                verticalDragToForward={false}
            />
            <hemisphereLight intensity={1}/>
            {/* <spotLight position={[0,2,10]} intensity={1} /> */}
        </>
    )
}
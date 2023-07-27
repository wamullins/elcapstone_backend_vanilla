import { Suspense, useRef, useContext} from 'react'
import { CameraControls, Box } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



export const ElCapScene = () => {

    const cameraControlsRef = useRef()

    const gltf = useLoader(GLTFLoader, '/el_capitan/scene.gltf')

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
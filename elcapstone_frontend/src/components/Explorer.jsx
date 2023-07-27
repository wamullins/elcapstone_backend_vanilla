import { Canvas } from '@react-three/fiber'
import { Home } from './Home'
import { ElCapScene } from './ElCapScene'

export const Explorer = () => {
 return (
    <>
        <Home />
        <Canvas camera={{ position: [0,0,1], fov: 40}}>
            <ElCapScene />
        </Canvas>
    </>
   
 )
}
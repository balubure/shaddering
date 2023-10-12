import React, { useState, useEffect, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei"

import Scene from "./Scene.jsx"
import { useThree } from '@react-three/fiber'



function App() {
  const [count, setCount] = useState(0)
  const state = useThree();

  useEffect(()=>{state.gl.toneMappingExposure=5;
  }, [state.gl])


  return (
    <>
      <Environment
        background={"only"}
        files={"/assets/textures/envmap_blur.hdr"}
        ground={{height: 100, radius: 300}}
      />

    <Environment
        background={false}
        files={"/assets/textures/envmap.hdr"}
        ground={{height: 100, radius: 300}}
      />

      <PerspectiveCamera makedefault fov={33} position={[-0.09, 16.01, -27.9]} />
      <OrbitControls target={[0.304, 0.806, 0.427]} maxPolarAngle={Math.PI * 0.45} />

      <Suspense fallback = {null} >
        <Scene />
      </Suspense>

    </>
  )
}

export default App

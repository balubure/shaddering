import React, { useState, useEffect, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import { NodeToyTick } from '@nodetoy/react-nodetoy'

import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei"

import Scene from "./Scene.jsx"
import { useThree } from '@react-three/fiber'

import Meteor from "./Meteor"
import { NodeToyTick } from '@nodetoy/react-nodetoy'



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

      <PerspectiveCamera makedefault fov={33} position={[-0.07, 16.41, -24.1]} />
      <OrbitControls target={[0.02, 0.806, 0.427]} maxPolarAngle={Math.PI * 0.45} />

      <NodeToyTick />

      <Suspense fallback = {null} >
        <Scene />

        <Meteor />
      </Suspense>

    </>
  )
}

export default App

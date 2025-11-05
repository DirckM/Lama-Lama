'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import dynamic from 'next/dynamic'

export default function Scene() {
    // // Lazy-load Perf only on client
    // const Perf = dynamic(() => import('r3f-perf').then(mod => mod.Perf), {
    //     ssr: false,
    // })

    return (
        <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        style={{ position: 'absolute', inset: 0, background: 'black' }}
        >
            {/* <Perf position="top-left" /> */}

            <directionalLight
                intensity={3}
                position={[0, 3, 2]}
            />
            <Environment preset='sunset' />
            <Model />
        </Canvas>
    )
}
    import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
    import { useFrame, useThree } from '@react-three/fiber'
    import React, { useRef } from 'react'
    import * as THREE from 'three'
    import gsap from 'gsap'
    import { useGSAP } from '@gsap/react'


    function Model() {

        const gltf = useGLTF('/fortnite_victory_crown_necklace.glb')
        const meshRef = useRef<THREE.Group>(null)
        const LamaGroupRef = useRef<THREE.Group>(null)
        const CrownGroupRef = useRef<THREE.Group>(null)
        const { viewport } = useThree()

        useFrame(() => {
            if (meshRef.current) {
                meshRef.current.rotation.y += 0.02
                meshRef.current.rotation.x += 0.02
            }
        })

        // Animate crown position based on scroll
        useGSAP(() => {
            if (LamaGroupRef.current) {
                gsap.to(LamaGroupRef.current.position, {
                    y: 100, // Move crown down in 3D space
                    delay: 1,
                    duration: 2,
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top bottom',
                        end: 'bottom center',
                        scrub: 1.5,
                        markers: true
                    }
                })
            }

        }, [])
        
    return (
        <group position={[0, 0, 0]}>
            {/* Lama Lama text - stays in place */}
            <group ref={LamaGroupRef} position={[0, 0, -5]} scale={viewport.width / 3}>
                <Text position={[0, -0.5, 0]} fontSize={1} color='#D7F3F5' fontWeight={700}>
                    Lama
                </Text>
                <Text position={[-0.1, 0.30, 0]} fontSize={1.2} color='#D7F3F5' fontWeight={700} font="/fonts/great_vibes/GreatVibes-Regular.ttf">
                    Lama
                </Text>
            </group>
            {/* Crown - moves down on scroll */}
            <group position={[0, 0, 0]}>
                <primitive ref={meshRef} object={gltf.scene} scale={viewport.width / 1.8 }>
                    <MeshTransmissionMaterial color='white' />
                </primitive>
            </group>
        </group>
    )
    }

    export default Model
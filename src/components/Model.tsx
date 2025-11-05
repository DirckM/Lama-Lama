'use client'
import { useGLTF, Text, Environment } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Model() {
  const gltf = useGLTF('/fortnite_victory_crown_necklace.glb')
  const meshRef = useRef<THREE.Group>(null)
  const LamaGroupRef = useRef<THREE.Group>(null)
  const CrownGroupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  const isMobile = viewport.width < 3
const textScale = isMobile ? viewport.width / 2.2 : viewport.width / 3
  const textY = isMobile ? 3.2 : 0 // push up on mobile\
  const textYOffset1 = isMobile ? 2.2 : 2.5
  const textYOffset2 = isMobile ? 3.0 : 2.4

  // Basic rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.005
    }
  })

  // Animate crown position based on scroll
  useGSAP(() => {
    if (CrownGroupRef.current) {
      gsap.to(CrownGroupRef.current.position, {
        y: -2.3,
        delay: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1.5,
          markers: true,
        },
      })
    }
  }, [])

  // Apply chrome material after model loads
  useEffect(() => {
    if (!gltf.scene) return
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 1,      // fully metallic
          roughness: 0,      // smooth surface
          envMapIntensity: 1,
        })
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })
  }, [gltf])

  return (
    <group position={[0, 0, 0]}>
      {/* Lama Lama text */}
      <group ref={LamaGroupRef} position={[0, textY, -5]} scale={viewport.width / 3}>
        <Text position={[0, 1.7, 0]} fontSize={1} color="#D7F3F5" fontWeight={700}>
          Lama
        </Text>
        <Text
          position={[-0.05, 2.4, 0]}
          fontSize={1.2}
          color="#D7F3F5"
          fontWeight={700}
          font="/fonts/great_vibes/GreatVibes-Regular.ttf"
        >
          Lama
        </Text>
      </group>

      {/* Crown */}
      <group ref={CrownGroupRef} position={[0, 2.35, 0]}>
        <primitive ref={meshRef} object={gltf.scene} scale={viewport.width / 1.8} />
      </group>

      {/* Add an HDRI or dynamic environment for reflections */}
      <Environment preset="city" background={false} />
    </group>
  )
}

export default Model

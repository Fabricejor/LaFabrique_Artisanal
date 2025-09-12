'use client'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Center } from '@react-three/drei'

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  try {
    const { scene } = useGLTF(modelPath)
    
    useEffect(() => {
      if (scene) {
        // Centrer le modèle
        scene.position.set(0, 0, 0)
        // Échelle plus conservative
        scene.scale.setScalar(1.5)
        console.log('Model loaded:', modelPath)
      }
    }, [scene, modelPath])

    return (
      <Center>
        <primitive object={scene} />
      </Center>
    )
  } catch (error) {
    console.error('Error loading model:', modelPath, error)
    return null
  }
}

// Composant de fallback pour le chargement
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  )
}

interface ModelViewerProps {
  className?: string;
}

export default function ModelViewer({ className }: ModelViewerProps) {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Corriger les chemins avec des espaces
  const models = [
    // '/3d/sac%201%20banner.glb',
    // '/3d/sac%202%20banner.glb',
    // '/3d/sac%203%20banner.glb',
    '/3d/sac%20rouge.glb',
    '/3d/sac%20orange.glb',
    '/3d/sac%20mauve.glb'
  ]

  useEffect(() => {
    // Tester le premier modèle pour voir s'il se charge
    console.log('Attempting to load model:', models[currentModelIndex])
    
    const interval = setInterval(() => {
      setCurrentModelIndex((prev) => {
        const nextIndex = (prev + 1) % models.length
        console.log('Switching to model:', models[nextIndex])
        return nextIndex
      })
    }, 10000) // Change every 10 seconds pour test plus rapide

    return () => clearInterval(interval)
  }, [models.length, currentModelIndex])

  return (
    <div className={`w-full h-full ${className}`} style={{ minHeight: '300px' }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
        onCreated={() => {
          console.log('Canvas created successfully')
          setIsLoaded(true)
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Éclairage amélioré */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />
          
          {/* Modèle 3D */}
          <Model modelPath={models[currentModelIndex]} />
          
          {/* Contrôles */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Indicateur de debug */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
          Loading 3D...
        </div>
      )}
    </div>
  )
}

// Preload all models avec chemins encodés
const modelsToPreload = [
  // '/3d/sac%201%20banner.glb',
  // '/3d/sac%202%20banner.glb',
  // '/3d/sac%203%20banner.glb',
  '/3d/sac%20rouge.glb',
  '/3d/sac%20orange.glb',
  '/3d/sac%20mauve.glb'
]

// Preload avec gestion d'erreur
modelsToPreload.forEach((model) => {
  try {
    useGLTF.preload(model)
    console.log('Preloading model:', model)
  } catch (error) {
    console.error('Failed to preload model:', model, error)
  }
})

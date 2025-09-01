'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

// Composant de test simple avec un cube
function TestCube() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  )
}

interface SimpleModelViewerProps {
  className?: string;
}

export default function SimpleModelViewer({ className }: SimpleModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`} style={{ minHeight: '300px' }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Éclairage */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          
          {/* Cube de test */}
          <TestCube />
        </Suspense>
      </Canvas>
    </div>
  )
}

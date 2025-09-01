'use client'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Center } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const [error, setError] = useState<string | null>(null)
  
  try {
    const gltf = useGLTF(modelPath)
    
    useEffect(() => {
      if (gltf.scene) {
        // Cloner la scène pour éviter les conflits entre plusieurs instances
        const scene = gltf.scene.clone()
        
        // ===== OPTIMISATION DES MATÉRIAUX POUR L'ÉCLAIRAGE =====
        
        // Parcourir tous les objets de la scène pour optimiser leurs matériaux
        scene.traverse((child: any) => {
          if (child.isMesh && child.material) {
            // Si c'est un matériau standard, s'assurer qu'il réagit bien à la lumière
            if (child.material.isMeshStandardMaterial || child.material.isMeshPhysicalMaterial) {
              // Augmenter la rugosité pour des reflets plus diffus et naturels
              child.material.roughness = Math.min(child.material.roughness + 0.2, 1.0)
              
              // Réduire le facteur métallique pour que la lumière se diffuse mieux
              child.material.metalness = Math.max(child.material.metalness - 0.1, 0.0)
              
              // S'assurer que le matériau reçoit les ombres
              child.receiveShadow = true
              child.castShadow = true
              
              // Forcer la mise à jour du matériau
              child.material.needsUpdate = true
            }
            
            // Si c'est un matériau de base (non éclairé), le convertir en matériau standard
            if (child.material.isMeshBasicMaterial) {
              const oldMaterial = child.material
              child.material = new THREE.MeshStandardMaterial({
                color: oldMaterial.color,
                map: oldMaterial.map,
                transparent: oldMaterial.transparent,
                opacity: oldMaterial.opacity,
                roughness: 0.7,  // Rugosité modérée pour un rendu naturel
                metalness: 0.1   // Peu métallique pour plus de diffusion
              })
              child.receiveShadow = true
              child.castShadow = true
            }
          }
        })
        
        // ===== AJUSTEMENT DE LA TAILLE ET POSITION =====
        
        // Calculer la bounding box pour ajuster la taille automatiquement
        const box = new THREE.Box3().setFromObject(scene)
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        
        // Échelle adaptative : plus grande pour les petits objets, plus petite pour les gros
        const targetSize = 2.5  // Taille cible dans l'espace 3D
        const scale = targetSize / maxDim
        
        scene.scale.setScalar(scale)
        scene.position.set(0, 0, 0)
        
        // ===== LOGGING POUR DEBUG =====
        console.log('Model loaded successfully:', modelPath)
        console.log('Model size:', size)
        console.log('Applied scale:', scale)
        console.log('Materials optimized for lighting')
        
        setError(null)
      }
    }, [gltf.scene, modelPath])

    return (
      <Center>
        <primitive object={gltf.scene.clone()} />
      </Center>
    )
  } catch (err) {
    console.error('Error loading model:', modelPath, err)
    setError(err instanceof Error ? err.message : 'Unknown error')
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    )
  }
}

// Composant de fallback pour le chargement
function LoadingFallback() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#D3D3D3" />
    </mesh>
  )
}

interface FixedModelViewerProps {
  className?: string;
}

export default function FixedModelViewer({ className }: FixedModelViewerProps) {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)
  
  // Utiliser les noms exacts des fichiers
  const models = [
    '/3d/sac 1 banner.glb',
    '/3d/sac 2 banner.glb',
    '/3d/sac 3 banner.glb',
    '/3d/sac rouge.glb'
  ]

  useEffect(() => {
    console.log('Current model:', models[currentModelIndex])
    
    const interval = setInterval(() => {
      setCurrentModelIndex((prev) => {
        const nextIndex = (prev + 1) % models.length
        console.log('Switching to model:', models[nextIndex])
        return nextIndex
      })
    }, 15000) // Change every 15 seconds

    return () => clearInterval(interval)
  }, [models.length, currentModelIndex])

  return (
         <div className={`w-full h-full relative ${className}`} style={{ minHeight: '300px' }}>
       <Canvas
         // ===== CONFIGURATION OPTIMALE DE LA CAMÉRA =====
         camera={{ 
           position: [0, 0, 4],  // Position plus éloignée pour mieux voir l'objet
           fov: 20,              // Champ de vision réduit pour moins de distorsion
           near: 0.1,            // Plan de coupe proche
           far: 100              // Plan de coupe lointain
         }}
         style={{ background: 'transparent' }}
         
         // ===== CONFIGURATION DU RENDERER POUR OPTIMISER L'ÉCLAIRAGE =====
         onCreated={(state) => {
           console.log('Canvas created successfully')
           
           // Configuration du renderer pour améliorer la qualité visuelle
           const renderer = state.gl
           
           // Activer le gamma correction pour des couleurs plus naturelles
           renderer.outputColorSpace = THREE.SRGBColorSpace
           
           // Améliorer la qualité des ombres
           renderer.shadowMap.enabled = true
           renderer.shadowMap.type = THREE.PCFSoftShadowMap  // Ombres plus douces
           
           // Activer le tone mapping pour un meilleur contraste
           renderer.toneMapping = THREE.ACESFilmicToneMapping
           renderer.toneMappingExposure = 1.2  // Exposition légèrement augmentée
           
           // Forcer le recalcul de l'éclairage - physicallyCorrectLights est deprecated
           // Les lumières sont maintenant physiquement correctes par défaut dans Three.js r150+
           
           console.log('Renderer optimized for lighting')
           console.log('Shadow mapping enabled:', renderer.shadowMap.enabled)
           console.log('Tone mapping:', renderer.toneMapping)
           
           setIsLoaded(true)
         }}
        onError={(error: any) => {
          console.error('Canvas error:', error)
          setLoadError(
            typeof error === 'object' && error !== null && 'message' in error
              ? (error as any).message
              : String(error)
          )
        }}
      >
                 <Suspense fallback={<LoadingFallback />}>
           {/* ===== ÉCLAIRAGE AMÉLIORÉ ===== */}
           
           {/* Lumière ambiante - Éclaire uniformément tous les objets depuis toutes les directions */}
           {/* Intensité augmentée pour assurer une base d'éclairage visible */}
           <ambientLight intensity={1.2} color="#ffffff" />
           
           {/* Lumière directionnelle principale - Simule le soleil, vient du dessus-avant-droite */}
           {/* Position: x=10 (droite), y=10 (haut), z=10 (avant) */}
           {/* Intensité forte pour créer les reflets principaux sur les matériaux */}
           <directionalLight 
             position={[10, 10, 10]} 
             intensity={2.5} 
             color="#ffffff"
             castShadow 
           />
           
           {/* Lumière de remplissage - Éclaire les zones d'ombre pour éviter les contrastes trop forts */}
           {/* Vient du côté opposé avec une intensité plus douce */}
           <directionalLight 
             position={[-8, 5, -8]} 
             intensity={1.0} 
             color="#f0f0f0" 
           />
           
           {/* Lumière du dessous - Éclaire la partie inférieure des objets */}
           {/* Simule la lumière réfléchie par le sol */}
           <directionalLight 
             position={[0, -10, 5]} 
             intensity={0.8} 
             color="#e8e8e8" 
           />
           
           {/* Lumière ponctuelle frontale - Éclaire directement la face avant */}
           {/* Position face à l'utilisateur pour révéler les détails */}
           <pointLight 
             position={[0, 0, 8]} 
             intensity={1.5} 
             color="#ffffff"
             distance={20}
             decay={1}
           />
           
           {/* Lumières latérales pour créer de la profondeur */}
           {/* Lumière chaude à droite */}
           <pointLight 
             position={[8, 0, 3]} 
             intensity={1.0} 
             color="#fff8e1"
             distance={15}
             decay={1}
           />
           
           {/* Lumière froide à gauche pour le contraste */}
           <pointLight 
             position={[-8, 0, 3]} 
             intensity={0.8} 
             color="#e3f2fd"
             distance={15}
             decay={1}
           />
           
           {/* Spot de mise en valeur - Éclaire spécifiquement le centre de la scène */}
           {/* Angle étroit pour concentrer la lumière sur l'objet */}
           <spotLight 
             position={[0, 15, 8]} 
             intensity={2.0}
             angle={Math.PI / 4}
             penumbra={0.3}
             color="#ffffff"
             target-position={[0, 0, 0]}
           />
           
           {/* Modèle 3D */}
           <Model modelPath={models[currentModelIndex]} />
          
          {/* Contrôles */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.3}
          />
        </Suspense>
      </Canvas>
      
      {/* Indicateurs de debug */}
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 bg-gray-100 bg-opacity-50 rounded-full">
          Loading 3D Scene...
        </div>
      )}
      
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-red-500 bg-red-100 bg-opacity-50 rounded-full">
          Error: {loadError}
        </div>
      )}
      
      {/* Indicateur du modèle actuel */}
      <div className="absolute top-2 left-2 text-xs text-gray-600 bg-white bg-opacity-70 px-2 py-1 rounded">
        Model {currentModelIndex + 1}/3
      </div>
    </div>
  )
}

// Preload tous les modèles
const modelsToPreload = [
  '/3d/sac 1 banner.glb',
  '/3d/sac 2 banner.glb',
  '/3d/sac 3 banner.glb',
  '/3d/sac rouge.glb'
]

modelsToPreload.forEach((model, index) => {
  setTimeout(() => {
    try {
      useGLTF.preload(model)
      console.log(`Preloading model ${index + 1}:`, model)
    } catch (error) {
      console.error(`Failed to preload model ${index + 1}:`, model, error)
    }
  }, index * 1000) // Décaler le preload pour éviter la surcharge
})

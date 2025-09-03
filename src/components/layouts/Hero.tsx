'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { TextLoop } from '../ui/text-loop'

// Import dynamique pour éviter les problèmes SSR avec Three.js
const ModelViewer = dynamic(() => import('../3d/ModelViewer'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 w-full h-full rounded-full" />
})

// Version simple pour test
const SimpleModelViewer = dynamic(() => import('../3d/SimpleModelViewer'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 w-full h-full rounded-full" />
})

// Version corrigée
const FixedModelViewer = dynamic(() => import('../3d/FixedModelViewer'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 w-full h-full rounded-full" />
})

export default function Hero() {
  return (
    <section className="min-h-screen bg-[var(--background-main-color)] px-4 py-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto h-full">
        {/* Version Desktop */}
        <div className="hidden md:flex items-center justify-between h-full min-h-[80vh]">
          {/* Contenu texte - Gauche */}
          <div className="flex-1 max-w-2xl">
            {/* Titre avec TextLoop */}
            <div className="mb-6">
              <TextLoop 
                className="text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--text-primary)] font-playfair"
                interval={3}
              >
                <span>Élégance.</span>
                <span>Culture.</span>
                <span>Originalité.</span>
              </TextLoop>
            </div>
            
            {/* Slogan */}
            <p className="text-xl lg:text-2xl text-[var(--text-secondary)] font-montserrat mb-8 leading-relaxed">
              Découvrez l'art africain réinventé à travers nos créations uniques,
              Portez l'Afrique avec fierté et style.
            </p>
            
            {/* Bouton */}
            <Link 
              href="/sacs"
              className="inline-block bg-[var(--text-primary)] text-white font-montserrat font-medium px-8 py-4 text-lg hover:opacity-90 transition-opacity duration-200"
            >
              Découvrir nos produits
            </Link>
          </div>
          
          {/* Cercles 3D - Droite */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Cercle extérieur */}
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-[var(--background-primary)] flex items-center justify-center">
                {/* Cercle intérieur */}
                <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-[var(--background-main-color)] flex items-center justify-center overflow-hidden">
                                      {/* Composant 3D */}
                    <div className="w-full h-full">
                      <FixedModelViewer />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Version Mobile */}
        <div className="md:hidden flex flex-col items-center justify-center min-h-screen space-y-8">
          {/* Cercles 3D - En haut sur mobile */}
          <div className="relative">
            {/* Cercle extérieur */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[var(--background-primary)] flex items-center justify-center">
              {/* Cercle intérieur */}
              <div className="w-60 h-60 sm:w-[280px] sm:h-[280px] rounded-full bg-[var(--background-main-color)] flex items-center justify-center overflow-hidden">
                                  {/* Composant 3D */}
                  <div className="w-full h-full">
                    <FixedModelViewer />
                  </div>
              </div>
            </div>
          </div>
          
          {/* Contenu texte - En bas sur mobile */}
          <div className="text-center space-y-6">
            {/* Titre avec TextLoop */}
            <div>
              <TextLoop 
                className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] font-playfair"
                interval={3}
              >
                <span>Élégance.</span>
                <span>Culture.</span>
                <span>Originalité.</span>
              </TextLoop>
            </div>
            
            {/* Slogan */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-montserrat leading-relaxed px-4">
              Découvrez l'art africain réinventé à travers nos créations uniques
            </p>
            
            {/* Bouton */}
            <Link 
              href="/sacs"
              className="inline-block bg-[var(--text-primary)] text-white font-montserrat font-medium px-6 py-3 text-base hover:opacity-90 transition-opacity duration-200"
            >
              Découvrir nos produits
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
